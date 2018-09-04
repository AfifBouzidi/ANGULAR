import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/220px-Albert_Einstein_1947.jpg"
  constructor() { }

  ngOnInit() {
  }

}
