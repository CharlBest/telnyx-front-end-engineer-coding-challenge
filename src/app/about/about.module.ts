import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import {
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        MatCardModule
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }
