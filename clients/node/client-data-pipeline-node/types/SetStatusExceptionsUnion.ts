import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type SetStatusExceptionsUnion =
  | PipelineNotFoundException
  | PipelineDeletedException
  | InternalServiceError
  | InvalidRequestException;
