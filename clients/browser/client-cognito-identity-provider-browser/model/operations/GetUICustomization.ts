import { GetUICustomizationInput } from "../shapes/GetUICustomizationInput";
import { GetUICustomizationOutput } from "../shapes/GetUICustomizationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUICustomization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUICustomization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetUICustomizationInput
  },
  output: {
    shape: GetUICustomizationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
