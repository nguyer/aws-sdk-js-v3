import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type PutSubscriptionFilterExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | OperationAbortedException
  | LimitExceededException
  | ServiceUnavailableException;
