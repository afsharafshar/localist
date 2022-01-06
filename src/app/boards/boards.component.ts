import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardModalComponent } from './components/board-modal/board-modal.component';
import { Board } from './models/board';
import { Priority } from './models/priority';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  listBoard: Board[] = [];

  constructor(private _dialog: MatDialog) {}

  ngOnInit(): void {
    let boardString = localStorage.getItem('board');
    if (boardString != null) {
      this.listBoard = JSON.parse(boardString);
    }
  }

  openCreateBoardModal() {
    let board: Board = {
      fromServer: false,
      title: '',
      body: '',
      priority: Priority.high,
      tempId: this.listBoard.length + 1,
    };
    const modal = this._dialog.open(BoardModalComponent, {
      data: board,
    });

    //subscribe to modal for info
    modal.afterClosed().subscribe((result) => {
      if (result != null) {
        this.listBoard.push(result);
        this.saveToLocalStorage();
      }
    });
  }

  deleteBoard(board: Board) {
    //todo after service add delete for service
    if (board.fromServer == false)
      this.listBoard = this.listBoard.filter((x) => x.tempId != board.tempId);
    this.saveToLocalStorage();
  }

  editBoard(board: Board) {
    const modal = this._dialog.open(BoardModalComponent, {
      data: board,
    });

    //subscribe to modal for info
    modal.afterClosed().subscribe((result: Board) => {
      if (result != null) {
        this.listBoard.map((x) => {
          if (x.id == result.id || x.tempId == result.tempId) {
            return result;
          } else {
            return x;
          }
        });
        this.saveToLocalStorage();
      }
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('board', JSON.stringify(this.listBoard));
  }
}
