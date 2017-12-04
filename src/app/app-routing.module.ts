import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomPreloading } from './shared/custom-preloading';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full', data: { preload: true } },
            { path: 'about', loadChildren: './about/about.module#AboutModule', pathMatch: 'full' },
            { path: 'feed', loadChildren: './feed/feed.module#FeedModule', data: { preload: true } },
            { path: 'create-post', loadChildren: './create-post/create-post.module#CreatePostModule', pathMatch: 'full' },
            { path: '**', redirectTo: '/', pathMatch: 'full' }
        ], { preloadingStrategy: CustomPreloading })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CustomPreloading
    ]
})
export class AppRoutingModule { }
