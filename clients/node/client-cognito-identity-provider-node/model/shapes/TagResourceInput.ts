import { _UserPoolTagsType } from "./_UserPoolTagsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _UserPoolTagsType
    }
  }
};
