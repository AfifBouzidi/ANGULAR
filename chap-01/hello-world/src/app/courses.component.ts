import {Component, style} from '@angular/core';
import {CoursesService} from './courses.service';
@Component({
    selector:'courses',
    template:`<h1> {{"Title :"+getTitle()}}</h1>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `
})
export class CoursesComponent{
   private title="List of courses !";
   courses;

   constructor(service:CoursesService){
    this.courses=service.getCourses();
   }
   getTitle()
   {
     return this.title;
   }
}