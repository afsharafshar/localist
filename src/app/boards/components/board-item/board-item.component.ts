import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from '../../models/board';
import { Priority } from '../../models/priority';

@Component({
  selector: 'board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css'],
})
export class BoardItemComponent implements OnInit {
  @Input() board!: Board;
  @Output() onDelete: EventEmitter<Board> = new EventEmitter<Board>();
  @Output() onEdit: EventEmitter<Board> = new EventEmitter<Board>();
  constructor() {}

  ngOnInit(): void {}

  deleteBoard() {
    this.onDelete.emit(this.board);
  }
  editBoard() {
    this.onEdit.emit(this.board);
  }

  computeBoarderClass(pr: Priority): string {
    switch (pr) {
      case Priority.high:
        return 'border-red';
      case Priority.medium:
        return 'border-yellow';
      case Priority.low:
        return 'border-blue';
      default:
        return '';
    }
  }
}
