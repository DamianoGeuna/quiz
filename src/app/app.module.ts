import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GameComponent } from './game/game.component';
import { AnswerListComponent } from './game/answer-list/answer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    GameComponent,
    AnswerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
