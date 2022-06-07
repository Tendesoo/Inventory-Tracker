import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  data : string = 'I am parent'
  dataFromChild : string = ''

  constructor() { }

  ngOnInit(): void {
  }
  displayData(event:string){
    this.dataFromChild = event


  }

}
