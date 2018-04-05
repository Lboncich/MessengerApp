import { Component } from "@angular/core";

import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms/src/directives/ng_form";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
  
})
//import messageServce, put in providers, pass to constructor. only this componenet can use this
export class MessageInputComponent{
    constructor(private messageService: MessageService)
    {

    }
    onSubmit(form: NgForm)
    {
     const message = new Message(form.value.content, 'max');
       this.messageService.addMessage(message);
       form.resetForm();
        
    }
}