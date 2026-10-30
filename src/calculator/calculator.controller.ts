import { Controller, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service.js';
import { CalculateDto } from './calculator.dto.js';

@Controller('calculate')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  calculate(@Body() dto: CalculateDto): { result: number } {
    const result = this.calculatorService.calculate(dto.expression);
    return { result };
  }
}
