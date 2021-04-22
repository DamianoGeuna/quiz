import { Component, Input, OnInit } from '@angular/core';//sempre dentro nodemodule

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  @Input() public title:string='';
  @Input() public lead:string='';//vuoto è valore predefinito
  constructor() { }

  ngOnInit(): void {
  }

}
