import { List as _List_ } from "@aws-sdk/types";

export const _QueryExecutionIdList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: {
      type: "string"
    }
  }
};
