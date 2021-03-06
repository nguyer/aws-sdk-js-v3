import { DeleteTrafficMirrorTargetInput } from "../shapes/DeleteTrafficMirrorTargetInput";
import { DeleteTrafficMirrorTargetOutput } from "../shapes/DeleteTrafficMirrorTargetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteTrafficMirrorTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTrafficMirrorTarget",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTrafficMirrorTargetInput
  },
  output: {
    shape: DeleteTrafficMirrorTargetOutput
  },
  errors: []
};
