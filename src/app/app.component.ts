import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-calculator';

  public firstNumber!: number;
  public secondNumber!: number;
  public result!: number;


  public add() {
    this.result = this.firstNumber + this.secondNumber;

    if(this.result == NaN) {
      this.result = 0;
    }
  }

  public subtract() {
    this.result = this.firstNumber - this.secondNumber;
    if(this.result == NaN) {
      this.result = 0;
    }
  }

  public multiply() {
    this.result = this.firstNumber * this.secondNumber;
    if(this.result == NaN) {
      this.result = 0;
    }
    
}

  public divide() {
    this.result = this.firstNumber / this.secondNumber;
    if(this.result == NaN) {
      this.result = 0;
    }
  }

  public clear() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
    if(this.result == NaN) {
      this.result = 0;
    }
  }

}

