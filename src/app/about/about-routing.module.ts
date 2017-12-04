import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: AboutComponent, pathMatch: 'full' }
        ])
    ],
    exports: [RouterModule]
})
export class AboutRoutingModule { }
