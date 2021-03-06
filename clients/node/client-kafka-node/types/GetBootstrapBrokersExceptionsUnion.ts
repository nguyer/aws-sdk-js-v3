import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
export type GetBootstrapBrokersExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | InternalServerErrorException
  | ConflictException
  | ForbiddenException;
