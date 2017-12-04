import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatCardModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
