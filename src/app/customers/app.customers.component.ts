import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './app.customers.component.html'
})
export class AppCustomersComponent {
  customersList: Customer[] = [
    { id: 1, name: 'Juan', surname: 'Cubillos', registrationDate: '2020/01/21', email: 'cubillos2093@hotmail.com' },
    { id: 2, name: 'Johanna', surname: 'Jola', registrationDate: '2020/01/20', email: 'johanna9015@hotmail.com' },
    { id: 3, name: 'Johanna', surname: 'Gonzalez', registrationDate: '2020/01/19', email: 'gonpi911@hotmail.com' },
    { id: 4, name: 'Sofia', surname: 'Jola', registrationDate: '2019/12/31', email: 'shofi.jm@gmail.com' },
    { id: 5, name: 'Matias', surname: 'Jola', registrationDate: '2019/12/30', email: 'matiasalv@gmail.com' },
    { id: 6, name: 'Thomas', surname: 'Cubillos', registrationDate: '2019/10/20', email: 'thomascubi@yahoo.es' },
  ];

  constructor() { }

}
