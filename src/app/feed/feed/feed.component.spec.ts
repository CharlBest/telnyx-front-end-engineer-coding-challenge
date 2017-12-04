import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedComponent } from './feed.component';
import { FeedService } from '../feed.service';
import { MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FeedRoutingModule } from '../feed-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FeedComponent
            ],
            imports: [
                RouterTestingModule,
                NoopAnimationsModule,
                MatCardModule,
                MatButtonModule,
                MatIconModule,
                MatMenuModule,
                MatProgressSpinnerModule,
                HttpClientModule
            ],
            providers: [
                FeedService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('show loading indicator', () => {
        expect(component.showPreloader).toBe(true);
    });

    it('default to sorting by newest first', () => {
        expect(component.isSortingNewestFirst).toBe(true);
    });
});
