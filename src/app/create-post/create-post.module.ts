import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreatePostService } from './create-post.service';
import { EmojiPanelModule } from '../shared/emoji-panel/emoji-panel.module';
import {
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        CreatePostRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatProgressSpinnerModule,
        EmojiPanelModule
    ],
    declarations: [
        CreatePostComponent
    ],
    providers: [
        CreatePostService
    ]
})
export class CreatePostModule { }
