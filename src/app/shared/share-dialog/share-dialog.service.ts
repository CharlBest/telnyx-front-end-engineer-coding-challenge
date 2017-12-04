import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class ShareDialogService {

    constructor(private dialog: MatDialog,
        private router: Router) { }

    share(link: any[]) {
        const newLink = `${location.origin}${this.router.createUrlTree(link).toString()}`;
        const dialogRef = this.dialog.open(ShareDialogComponent);

        dialogRef.componentInstance.link = newLink;

        return dialogRef.afterClosed();
    }
}
