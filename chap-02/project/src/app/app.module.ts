import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { MessageService } from './interpolation/message.service';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { AddingBootstrapComponent } from './adding-bootstrap/adding-bootstrap.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { SummaryPipe } from './built-in-pipes/summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    AddingBootstrapComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateVariablesComponent,
    TwowayBindingComponent,
    BuiltInPipesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
