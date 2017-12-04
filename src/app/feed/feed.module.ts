import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedService } from './feed.service';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { ShareDialogModule } from '../shared/share-dialog/share-dialog.module';
import { EmojiPanelModule } from '../shared/emoji-panel/emoji-panel.module';
import {
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FeedRoutingModule,
        ShareDialogModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        EmojiPanelModule
    ],
    declarations: [
        FeedComponent,
        PostComponent,
        CommentComponent,
        CreateCommentComponent
    ],
    providers: [
        FeedService
    ]
})
export class FeedModule { }
