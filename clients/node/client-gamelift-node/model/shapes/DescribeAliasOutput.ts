import { _Alias } from "./_Alias";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAliasOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Alias: {
      shape: _Alias
    }
  }
};
