import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePackagingGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    }
  }
};
