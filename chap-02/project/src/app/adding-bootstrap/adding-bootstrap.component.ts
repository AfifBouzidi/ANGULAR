import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-bootstrap',
  templateUrl: './adding-bootstrap.component.html',
  styleUrls: ['./adding-bootstrap.component.css']
})
export class AddingBootstrapComponent implements OnInit {

  steps=["npm install bootstrap --save","npm install","add in styles.css : @import \"~bootstrap/dist/css/bootstrap.css\";"]
  constructor() { }

  ngOnInit() {
  }

}
