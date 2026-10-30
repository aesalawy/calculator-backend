import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  calculate(expression: string): number {
    const sanitized = expression.replace(/\s/g, '');

    // Only allow digits, basic operators, dots, and parentheses
    if (!/^[0-9+\-*/().]+$/.test(sanitized)) {
      throw new BadRequestException('Invalid expression');
    }

    try {
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; return (${sanitized})`)();
      if (!isFinite(result)) {
        throw new BadRequestException('Result is not a finite number');
      }
      return result;
    } catch {
      throw new BadRequestException('Could not evaluate expression');
    }
  }
}
