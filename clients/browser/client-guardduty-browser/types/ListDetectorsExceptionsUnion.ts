import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListDetectorsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException;
