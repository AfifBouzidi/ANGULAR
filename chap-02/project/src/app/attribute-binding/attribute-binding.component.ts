import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {

  scientists=["Albert Einstein","Niels bohr","Erwin Schrödinger"];
  colSpan=2;
  constructor() { }

  ngOnInit() {
  }

}
