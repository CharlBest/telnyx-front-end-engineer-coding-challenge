import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { FeedService } from '../feed.service';
import { CreateCommentComponent } from '../create-comment/create-comment.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EmojiPanelModule } from '../../shared/emoji-panel/emoji-panel.module';
import { HttpClientModule } from '@angular/common/http';

describe('CommentComponent', () => {
    let component: CommentComponent;
    let fixture: ComponentFixture<CommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CommentComponent,
                CreateCommentComponent
            ],
            imports: [
                NoopAnimationsModule,
                MatButtonModule,
                MatProgressSpinnerModule,
                EmojiPanelModule,
                HttpClientModule
            ],
            providers: [
                FeedService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should hide reply input', () => {
        expect(component.showReplyInput).toBe(false);
    });
});
