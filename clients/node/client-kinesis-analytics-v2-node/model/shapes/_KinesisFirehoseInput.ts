import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisFirehoseInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
