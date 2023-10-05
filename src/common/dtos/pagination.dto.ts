import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // enableImplicitCoversions: true
  public limit?: number;

  @IsOptional()
  @Min(0)
  @Type(() => Number) // enableImplicitCoversions: true
  public offset?: number;

  constructor(limit: number, offset: number) {
    this.limit = limit;
    this.offset = offset;
  }
}
