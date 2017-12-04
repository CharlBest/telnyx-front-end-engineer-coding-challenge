import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommentComponent } from './create-comment.component';
import { FeedService } from '../feed.service';
import { EmojiPanelModule } from '../../shared/emoji-panel/emoji-panel.module';
import { MatProgressSpinnerModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateCommentComponent', () => {
    let component: CreateCommentComponent;
    let fixture: ComponentFixture<CreateCommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
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
        fixture = TestBed.createComponent(CreateCommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('do not show loading indicator', () => {
        expect(component.showPreloader).toBe(false);
    });
});
