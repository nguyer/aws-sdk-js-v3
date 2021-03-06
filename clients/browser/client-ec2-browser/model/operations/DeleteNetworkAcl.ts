import { DeleteNetworkAclInput } from "../shapes/DeleteNetworkAclInput";
import { DeleteNetworkAclOutput } from "../shapes/DeleteNetworkAclOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNetworkAcl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNetworkAcl",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNetworkAclInput
  },
  output: {
    shape: DeleteNetworkAclOutput
  },
  errors: []
};
