import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrustInput: _Structure_ = {
  type: "structure",
  required: ["TrustId"],
  members: {
    TrustId: {
      shape: {
        type: "string"
      }
    },
    DeleteAssociatedConditionalForwarder: {
      shape: {
        type: "boolean"
      }
    }
  }
};
