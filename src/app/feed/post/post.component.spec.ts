import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PostComponent } from './post.component';
import { FeedService } from '../feed.service';
import { ShareDialogModule } from '../../shared/share-dialog/share-dialog.module';
import { FeedRoutingModule } from '../feed-routing.module';
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommentComponent } from '../comment/comment.component';
import { EmojiPanelModule } from '../../shared/emoji-panel/emoji-panel.module';

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PostComponent,
                CreateCommentComponent,
                CommentComponent
            ],
            imports: [
                RouterTestingModule,
                ShareDialogModule,
                NoopAnimationsModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatProgressSpinnerModule,
                HttpClientModule,
                EmojiPanelModule
            ],
            providers: [
                FeedService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('show comments loading indicator', () => {
        expect(component.showCommentsPreloader).toBe(true);
    });

    it('show comment input', () => {
        expect(component.showCommentInput).toBe(false);
    });
});
