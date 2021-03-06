import { ListStackResourcesInput } from "../shapes/ListStackResourcesInput";
import { ListStackResourcesOutput } from "../shapes/ListStackResourcesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStackResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStackResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStackResourcesInput
  },
  output: {
    shape: ListStackResourcesOutput,
    resultWrapper: "ListStackResourcesResult"
  },
  errors: []
};
