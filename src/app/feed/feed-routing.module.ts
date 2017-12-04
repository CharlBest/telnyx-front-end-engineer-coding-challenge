import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: FeedComponent, pathMatch: 'full' },
            { path: ':id', component: PostComponent, pathMatch: 'full' }
        ])
    ],
    exports: [RouterModule]
})
export class FeedRoutingModule { }
