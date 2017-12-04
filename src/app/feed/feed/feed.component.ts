import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FeedService } from '../feed.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/models/post.model';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

    posts: Post[];
    isSortingNewestFirst = true;
    showPreloader = true;

    constructor(private title: Title,
        private feedService: FeedService) {
    }

    ngOnInit() {
        this.title.setTitle('Feed');
        this.getPosts();
    }

    getPosts() {
        this.feedService.getPosts().subscribe(data => {
            this.posts = data;
            this.showPreloader = false;
        });
    }

    sortNewestFirst() {
        if (!this.isSortingNewestFirst) {
            this.posts = this.posts.reverse();
            this.isSortingNewestFirst = true;
        }
    }

    sortOldestFirst() {
        if (this.isSortingNewestFirst) {
            this.posts = this.posts.reverse();
            this.isSortingNewestFirst = false;
        }
    }
}
