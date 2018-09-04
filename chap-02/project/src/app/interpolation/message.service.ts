import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages=["Hi","Hello","Bonjour"];

  findMessages()
  {
    return this.messages;
  }
  constructor() { }

}
