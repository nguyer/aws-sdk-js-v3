import { GetUserEndpointsInput } from "../shapes/GetUserEndpointsInput";
import { GetUserEndpointsOutput } from "../shapes/GetUserEndpointsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetUserEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUserEndpoints",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/users/{user-id}"
  },
  input: {
    shape: GetUserEndpointsInput
  },
  output: {
    shape: GetUserEndpointsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
