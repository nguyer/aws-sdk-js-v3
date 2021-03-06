import { ListPackagingConfigurationsInput } from "../shapes/ListPackagingConfigurationsInput";
import { ListPackagingConfigurationsOutput } from "../shapes/ListPackagingConfigurationsOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPackagingConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPackagingConfigurations",
  http: {
    method: "GET",
    requestUri: "/packaging_configurations"
  },
  input: {
    shape: ListPackagingConfigurationsInput
  },
  output: {
    shape: ListPackagingConfigurationsOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
