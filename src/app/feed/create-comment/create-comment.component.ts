import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FeedService } from '../feed.service';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../../shared/models/comment.model';

@Component({
    selector: 'app-create-comment',
    templateUrl: './create-comment.component.html',
    styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {

    @Input() comment: Comment = null;
    @Input() postId: number;
    @Input() show = false;
    @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() commentCreated: EventEmitter<Comment> = new EventEmitter<Comment>();
    @ViewChild('replyInput') replyInput: ElementRef;
    showPreloader = false;

    constructor(private feedService: FeedService) { }

    ngOnInit() {
        // Assume that is a comment and not reply so show input
        if (this.comment === null) {
            this.show = true;
        }
    }

    createReply(replyText: string) {
        if (replyText !== '') {
            this.showPreloader = true;

            const newComment = new Comment();

            newComment.postId = this.postId;
            newComment.parent_id = this.comment === null ? null : this.comment.id;
            newComment.user = 'demo user';
            newComment.content = replyText;

            // Create current date in the same format as the API dates
            const date = new Date();
            newComment.date = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;

            this.feedService.createPostComment(newComment).subscribe(data => {
                // Emit new comment to parent if its not a reply
                if (this.comment === null) {
                    this.commentCreated.emit(data);
                } else {
                    if (this.comment['replies'] === undefined || this.comment['replies'].length <= 0) {
                        this.comment['replies'] = [];
                    }

                    this.comment['replies'].unshift(data);
                    this.hideCommentInput();
                }
                this.replyInput.nativeElement.innerHTML = '';
            }, error => {
                alert('En error occurred while creating your comment. Sorry');
            }, () => {
                this.showPreloader = false;
            });
        }
    }

    hideCommentInput() {
        this.show = false;
        this.showChange.emit(this.show);
    }

    onInserted(emojiImageTag: string) {
        this.replyInput.nativeElement.value = this.replyInput.nativeElement.value + emojiImageTag;
    }
}
