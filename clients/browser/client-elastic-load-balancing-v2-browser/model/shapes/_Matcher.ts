import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Matcher: _Structure_ = {
  type: "structure",
  required: ["HttpCode"],
  members: {
    HttpCode: {
      shape: {
        type: "string"
      }
    }
  }
};
