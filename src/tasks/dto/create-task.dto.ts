// DTO - Data Transfer Object (Objeto de Transferência de Dados)
// Valida, Transforma, Filtra e Representa dados em certos formatos(como um Modelo de Dados)

import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  readonly title: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  readonly description: string;
}
