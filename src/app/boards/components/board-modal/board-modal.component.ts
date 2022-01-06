import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Board } from '../../models/board';
import { Priority } from '../../models/priority';
import { selectList } from '../../models/selectList';

@Component({
  selector: 'board-modal',
  templateUrl: './board-modal.component.html',
  styleUrls: ['./board-modal.component.css'],
})
export class BoardModalComponent implements OnInit {
  boardform: FormGroup = new FormGroup({
    title: new FormControl(this.board.title, [Validators.required]),
    body: new FormControl(this.board.body),
    priority: new FormControl(this.board.priority, [Validators.required]),
  });

  PrioritySelect: selectList[] = [];

  constructor(
    public dialogRef: MatDialogRef<BoardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public board: Board,
    private _snackBar: MatSnackBar
  ) {
    this.makeSelect();
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    if (!this.boardform.valid) {
      this._snackBar.open('please fill the form', 'oops', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 1500,
      });
      return;
    }
    this.board.fromServer = false;
    this.board.title = this.boardform.value.title;
    this.board.body = this.boardform.value.body;
    this.board.priority = this.boardform.value.priority;

    this.dialogRef.close(this.board);
  }

  makeSelect() {
    var listAll = Object.keys(Priority)
      .filter((x) => !isNaN(+x))
      .map((x) => parseInt(x));
    this.PrioritySelect = listAll.map<selectList>((x) => {
      return { key: x, value: Priority[x] };
    });
  }
}
