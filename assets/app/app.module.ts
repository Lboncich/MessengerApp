import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.componenet';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { headerComponent } from './header.component';
import { routing } from '../app.routing';
//passes extra data
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        headerComponent
       
    ],
    imports: [BrowserModule,FormsModule,routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}