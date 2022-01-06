import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//my module
import { MaterialUiModule } from './material-ui/material-ui.module';
import { BoardsModule } from './boards/boards.module';

//angular module

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    BoardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
