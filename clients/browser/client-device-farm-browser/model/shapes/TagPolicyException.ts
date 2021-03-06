import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagPolicyException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    resourceName: {
      shape: {
        type: "string",
        min: 32
      }
    }
  },
  exceptionType: "TagPolicyException"
};
