import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  limit =50;
  lifeAndCareer="Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics";
  works =["Statistical mechanics","Special relativity","General relativity","Old quantum theory","Quantum mechanics","Unified field theory"];
  constructor() { }

  ngOnInit() {
  }

}
