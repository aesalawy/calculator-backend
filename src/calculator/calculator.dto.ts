import { IsString, IsNotEmpty } from 'class-validator';

export class CalculateDto {
  @IsString()
  @IsNotEmpty()
  expression: string;
}
