import { GetStageInput } from "../shapes/GetStageInput";
import { GetStageOutput } from "../shapes/GetStageOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetStage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetStage",
  http: {
    method: "GET",
    requestUri: "/v2/apis/{apiId}/stages/{stageName}"
  },
  input: {
    shape: GetStageInput
  },
  output: {
    shape: GetStageOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
