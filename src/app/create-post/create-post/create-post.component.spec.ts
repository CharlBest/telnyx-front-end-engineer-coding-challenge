import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreatePostComponent } from './create-post.component';
import { CreatePostRoutingModule } from '../create-post-routing.module';
import { MatCardModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { EmojiPanelModule } from '../../shared/emoji-panel/emoji-panel.module';
import { CreatePostService } from '../create-post.service';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CreatePostComponent', () => {
    let component: CreatePostComponent;
    let fixture: ComponentFixture<CreatePostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CreatePostComponent
            ],
            imports: [
                RouterTestingModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                MatCardModule,
                MatButtonModule,
                MatInputModule,
                MatProgressSpinnerModule,
                EmojiPanelModule,
                HttpClientModule
            ],
            providers: [
                CreatePostService,
                Location
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreatePostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('has page title', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-card-title').textContent).toContain('Create Post');
    }));

    it('should create a `FormGroup` comprised of `FormControl`s', () => {
        component.ngOnInit();
        expect(component.form instanceof FormGroup).toBe(true);

        expect(Object.keys(component.form.controls)).toEqual([
            'title',
            'description'
        ]);
    });

    it('do not show loading indicator', () => {
        expect(component.showPreloader).toBe(false);
    });

    it('should create Quill editor', () => {
        component.ngAfterViewInit();

        expect(component.editor).toBeTruthy();
    });
});
