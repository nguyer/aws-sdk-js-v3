import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListListenersInput: _Structure_ = {
  type: "structure",
  required: ["AcceleratorArn"],
  members: {
    AcceleratorArn: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
