import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteHsmOutput: _Structure_ = {
  type: "structure",
  required: ["Status"],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
