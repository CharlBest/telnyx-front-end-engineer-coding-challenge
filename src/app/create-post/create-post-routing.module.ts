import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CreatePostComponent, pathMatch: 'full' }
        ])
    ],
    exports: [RouterModule]
})
export class CreatePostRoutingModule { }
