import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './app.directive.component.html'
})
export class AppDirectiveComponent {
  courseList: String[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];
  showCourseList: Boolean = true;

  constructor() {

  }

  setshowCourseList(): void {
    this.showCourseList = (this.showCourseList == true) ? false : true;
  }

}
