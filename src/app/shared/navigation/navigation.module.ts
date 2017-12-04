import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import {
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        NavigationComponent
    ],
    declarations: [
        NavigationComponent
    ]
})
export class NavigationModule { }
