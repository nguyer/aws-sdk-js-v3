import { List as _List_ } from "@aws-sdk/types";

export const _SensitiveStringList: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string",
      sensitive: true
    }
  }
};
