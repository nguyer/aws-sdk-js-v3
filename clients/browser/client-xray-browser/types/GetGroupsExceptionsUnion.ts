import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type GetGroupsExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
