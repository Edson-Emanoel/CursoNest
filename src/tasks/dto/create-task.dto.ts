// DTO - Data Transfer Object (Objeto de Transferência de Dados)
// Valida, Transforma, Filtra e Representa dados em certos formatos(como um Modelo de Dados)

export class CreateTaskDto {
  readonly title: string;
  readonly description: string;
}
