import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeModelPackageInput: _Structure_ = {
  type: "structure",
  required: ["ModelPackageName"],
  members: {
    ModelPackageName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
