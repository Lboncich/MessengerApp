import { Component } from '@angular/core';
import { MessageComponent } from './messages/message.component';
import { MessageService } from './messages/message.service';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
   
})
export class AppComponent {
   }
