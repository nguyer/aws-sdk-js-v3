import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type RestoreFromSnapshotExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidParameterException
  | ClientException
  | ServiceException;
