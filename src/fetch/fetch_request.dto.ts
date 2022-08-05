import { IsUrl } from 'class-validator';

export default class FetchRequestDto {
  @IsUrl()
  url!: string;
}
