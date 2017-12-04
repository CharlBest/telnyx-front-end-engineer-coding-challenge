import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FeedService } from '../feed.service';
import { Observable } from 'rxjs/Observable';
import { ShareDialogService } from '../../shared/share-dialog/share-dialog.service';
import { Post } from '../../shared/models/post.model';
import { Comment } from '../../shared/models/comment.model';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    postId: number;
    post$: Observable<Post>;
    comments: Comment[];
    showCommentInput = false;
    showCommentsPreloader = true;

    constructor(private title: Title,
        private route: ActivatedRoute,
        private router: Router,
        private shareDialogService: ShareDialogService,
        private feedService: FeedService) {
    }

    ngOnInit() {
        this.title.setTitle('Post');

        this.route.paramMap.subscribe(params => {
            if (params.has('id')) {
                this.postId = +params.get('id');
                this.showCommentsPreloader = true;
                this.getPost();
            } else {
                this.router.navigate(['feed']);
            }
        });
    }

    getPost() {
        this.post$ = this.feedService.getPost(this.postId);
        this.feedService.getPostComments(this.postId).subscribe(data => {
            this.comments = data;
            this.showCommentsPreloader = false;
        });
    }

    commentCreated(comment: Comment) {
        this.comments.unshift(comment);
    }

    openShareDialog() {
        const link = ['/feed', this.postId];
        this.shareDialogService.share(link);
    }
}
