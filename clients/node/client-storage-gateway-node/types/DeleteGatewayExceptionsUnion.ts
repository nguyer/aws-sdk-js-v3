import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
export type DeleteGatewayExceptionsUnion =
  | InvalidGatewayRequestException
  | InternalServerError;
