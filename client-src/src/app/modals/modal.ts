import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'modal-dialog.html',
})
export class Modal {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
     ) { }

    view: string;

    setView(s:string) {
        this.view = s;
    }
}
