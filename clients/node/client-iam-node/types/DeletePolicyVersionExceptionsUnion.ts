import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { DeleteConflictException } from "./DeleteConflictException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeletePolicyVersionExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | InvalidInputException
  | DeleteConflictException
  | ServiceFailureException;
