import { Component, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //è la domanda da rappresentare
  //game service non ha argomenti nel costruttore

  public question:Question

  constructor(
    public service:GameService
  ) {
    this.question = this.service.getCurrentQuestion();
  }

  ngOnInit(): void {}

  setUserAnswer(clickedUserChoice:string){
    this.question.userAnswer = clickedUserChoice;
    this.question.isDone = true;
    this.question.isCorrect = this.question.correct_answer === clickedUserChoice;
  }

  goToNextQuestion(){
    this.service.getNextQuestions();
    this.question = this.service.getNextQuestions;
  }

  goToPreviousQuestion(){
    this.service.getPreviousQuestion();
    this.question = this.service.getPreviousQuestion;
  }
}
