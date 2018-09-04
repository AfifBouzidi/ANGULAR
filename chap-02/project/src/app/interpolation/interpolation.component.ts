import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  title = "Hello world";
  messages;
  constructor(messageService:MessageService ) { 
    this.messages=messageService.findMessages();
  }

  getTitle()
  {
    return this.title;
  }
  ngOnInit() {
  }

}
