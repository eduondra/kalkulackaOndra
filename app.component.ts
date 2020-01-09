import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kalkulacka';

  result: any = '';

  nula() {
    this.result += 0;
  }
  jednicka() {
    this.result += 1;
  }
  dvojka() {
    this.result += 2;
  }
  trojka() {
    this.result += 3;
  }
  ctyrirka() {
    this.result += 4;
  }
  petka() {
    this.result += 5;
  }
  sestka() {
    this.result += 6;
  }
  sedmicka() {
    this.result += 7;
  }
  osmicka() {
    this.result += 8;
  }
  devitka() {
    this.result += 9;
  }

  minus() {
    this.result +=  '-';
  }
  plus() {
    this.result += '+';
  }

  deleno() {
    this.result += '/';
  }

  krat() {
    this.result += '*';
  }

  vysledek() {
    const expression = this.result;
    // tslint:disable-next-line:no-eval
    this.result = eval(expression.toString());
  }



}
