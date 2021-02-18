//ModalTestComponent
import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'modal-test',
  templateUrl: 'modal-test.component.html',
})
export class ModalTestComponent {
  constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'modal-dialog.html',
// })
// export class DialogContentExampleDialog {}
