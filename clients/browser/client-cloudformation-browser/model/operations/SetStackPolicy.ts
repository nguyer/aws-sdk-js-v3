import { SetStackPolicyInput } from "../shapes/SetStackPolicyInput";
import { SetStackPolicyOutput } from "../shapes/SetStackPolicyOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetStackPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetStackPolicy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetStackPolicyInput
  },
  output: {
    shape: SetStackPolicyOutput
  },
  errors: []
};
