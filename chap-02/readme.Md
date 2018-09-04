- Interpolation {{...}} : communicate properties (variables, objects, arrays, etc..) from the component class to the template: {{ propertyName }}

- Property Binding: bind property of DOM element to a field in the component:  <img [src]="field">, Property binding is one-way

- Attribute Binding: Property Binding binds the DOM propetries, to bind html attributes we must use 'attr.': <td [attr.colspan]="field">

- Class Binding
- Style Binding
- Event Binding