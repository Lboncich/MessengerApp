import { Component } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.service";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: 'app-message-list',
    template: `
    <div class ="col-md-8 col-md-offset-2 ">
    <app-message [inputMessage]="message" (editClicked)="message.content = $event"
            *ngFor="let message of messages"
            ></app-message>
    </div> 


    `
})
export class MessageListComponent implements OnInit {
    constructor(private messageSerice: MessageService)
    {
        
    }
    messages: Message[]= []
    ngOnInit(){
       this.messages = this.messageSerice.getMessages();     
    }
}