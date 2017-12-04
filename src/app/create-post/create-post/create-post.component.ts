import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as Quill from 'quill';
import { CreatePostService } from '../create-post.service';
import { Post } from '../../shared/models/post.model';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, AfterViewInit {

    @Input() editorDomElement: HTMLDivElement = null;
    form: FormGroup;
    quill: any = Quill;
    editor: Quill.Quill;
    showPreloader = false;

    constructor(private title: Title,
        private createPostService: CreatePostService,
        private fb: FormBuilder,
        private location: Location,
        private router: Router) { }

    ngOnInit() {
        this.title.setTitle('Create Post');
        this.buildForm();
    }

    ngAfterViewInit() {
        this.initQuillEditor();
    }

    initQuillEditor() {
        this.editor = new this.quill(`#editor`, {
            modules: {
                toolbar: [
                    ['bold', 'italic'],
                    [{ 'header': 2 }],
                    [{ list: 'bullet' }, { list: 'ordered' }],
                    ['link']
                ]
            },
            placeholder: 'type here for post content...',
            theme: 'snow'
        });

        this.editorDomElement = this.editor.root;
    }

    buildForm() {
        this.form = this.fb.group({
            title: ['', [
                Validators.required
            ]],
            description: ['', [
                Validators.required,
                Validators.minLength(6)
            ]]
        });
    }

    createPost() {
        if (this.editor.root.textContent !== '') {
            this.showPreloader = true;

            const newPost = new Post();

            newPost.title = this.form.get('title').value;
            newPost.description = this.form.get('description').value;
            newPost.author = 'demo user';
            newPost.slug = newPost.title.replace(' ', '-');
            newPost.content = this.editor.root.innerHTML;

            // Create current date in the same format as the API dates
            const date = new Date();
            newPost.publish_date = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;

            this.createPostService.createPost(newPost).subscribe(data => {
                this.router.navigate(['feed']);
            }, error => {
                alert('En error occurred while creating your post. Sorry');
            }, () => {
                this.showPreloader = false;
            });
        }
    }

    back() {
        this.location.back();
    }
}
