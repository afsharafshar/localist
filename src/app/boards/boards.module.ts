import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { BoardsComponent } from './boards.component';
import { BoardModalComponent } from './components/board-modal/board-modal.component';
import { BoardItemComponent } from './components/board-item/board-item.component';

@NgModule({
  declarations: [BoardsComponent, BoardModalComponent, BoardItemComponent],
  imports: [CommonModule, MaterialUiModule, ReactiveFormsModule],
})
export class BoardsModule {}
