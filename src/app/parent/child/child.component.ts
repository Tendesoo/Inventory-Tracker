import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() data! : string
@Output() response = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
    this.response.emit('No you are from parent')
  }

}
