import { AttachClassicLinkVpcInput } from "../shapes/AttachClassicLinkVpcInput";
import { AttachClassicLinkVpcOutput } from "../shapes/AttachClassicLinkVpcOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachClassicLinkVpc: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachClassicLinkVpc",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachClassicLinkVpcInput
  },
  output: {
    shape: AttachClassicLinkVpcOutput
  },
  errors: []
};
