import { GetLayerVersionPolicyInput } from "../shapes/GetLayerVersionPolicyInput";
import { GetLayerVersionPolicyOutput } from "../shapes/GetLayerVersionPolicyOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetLayerVersionPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetLayerVersionPolicy",
  http: {
    method: "GET",
    requestUri: "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy"
  },
  input: {
    shape: GetLayerVersionPolicyInput
  },
  output: {
    shape: GetLayerVersionPolicyOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
