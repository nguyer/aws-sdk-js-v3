import { _AttributeKeyAndValueList } from "./_AttributeKeyAndValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListObjectAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _AttributeKeyAndValueList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
