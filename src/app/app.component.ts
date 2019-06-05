import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private greeting: string;
  private firstValue: string ;
  private secondValue: string ;

  @ViewChild ('newtitle') newtitle: ElementRef;

  @ViewChild ('newlink') newlink: ElementRef;

  constructor() {
    this.greeting =  'A greeting value';
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if (title === undefined || link === undefined) {
      console.log('title is undefined or link is undefined!');
      return false;
    }


    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.firstValue = title.value;
    this.secondValue = link.value;
    return false;
  }
}
