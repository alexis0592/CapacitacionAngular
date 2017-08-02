import { Component } from '@angular/core';

@Component({
    selector:'.app-login',
    template:`
        <h3>template desde el componente</h3>
    `,
    styles:[`
        h3{
            color:yellow;
        }
    `]
})
export class LoginComponent{

}