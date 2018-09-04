import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  color="green";
  message="";
  constructor() { }

  switch($event)
  {
    this.color=this.color=="red"?this.color="green":this.color="red";
  }

  readValue($event)
  {
    this.message=$event.target.value;
  }
  ngOnInit() {
  }

}
