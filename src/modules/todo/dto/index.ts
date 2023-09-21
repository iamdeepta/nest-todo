import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
