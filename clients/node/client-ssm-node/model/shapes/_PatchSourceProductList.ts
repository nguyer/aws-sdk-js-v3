import { List as _List_ } from "@aws-sdk/types";

export const _PatchSourceProductList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: {
      type: "string",
      min: 1
    }
  }
};
