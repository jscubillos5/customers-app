import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Welcome to customers-app';
  course: string = 'Course: Angular with Spring 5';
  teacher: string = 'Teacher: Andrés José Guzmán';
  student: string = 'Student: Juan Sebastián Cubillos Gonzalez';
}
