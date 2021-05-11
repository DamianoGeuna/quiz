import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  @Input() public list:string[]=[]
  
  constructor() { }

  ngOnInit(): void {
  }

}