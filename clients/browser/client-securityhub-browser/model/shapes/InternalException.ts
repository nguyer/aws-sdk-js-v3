import { Structure as _Structure_ } from "@aws-sdk/types";

export const InternalException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Code: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InternalException"
};
