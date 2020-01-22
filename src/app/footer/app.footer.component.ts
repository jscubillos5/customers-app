import { Component } from '@angular/core';

@Component({

    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styleUrls: ['./app.footer.component.css']
})
export class AppFooterComponent {
    public author: any = { name: 'Juan Sebastián', surname: 'Cubillos Gonzalez' }
}
