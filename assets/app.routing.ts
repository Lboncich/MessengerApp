import {Routes,RouterModule} from '@angular/router'
import { MessagesComponent } from './app/messages/messages.component';
import { AuthenticationComponent } from './app/auth/authentication.component';
const APP_ROUTES: Routes = [
    {path : 'messages', component: MessagesComponent},
    {path : 'auth', component: AuthenticationComponent},
    {path : '', redirectTo: '/messages',pathMatch : 'full'}

]

export const routing = RouterModule.forRoot(APP_ROUTES);