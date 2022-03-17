import { Injectable } from '@nestjs/common';

@Injectable({})
export class FibonacciService {
  private number: any = 0;

  returnNumber() {
    return this.number;
  }

  inputNumber(number: number) {
    return (this.number = number);
  }
}
