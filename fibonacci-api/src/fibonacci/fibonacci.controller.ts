import { Controller, Get, Param } from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';

@Controller('api')
export class FibonacciController {
  constructor(private fibonacciService: FibonacciService) {}

  @Get('fibonacci')
  getNumber(): any {
    return this.fibonacciService.returnNumber();
  }
  @Get('fibonacci/:id')
  setNumber(@Param('id') id: string): any {
    return this.fibonacciService.inputNumber(Number(id));
  }
}
