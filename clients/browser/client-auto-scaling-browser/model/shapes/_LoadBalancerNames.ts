import { List as _List_ } from "@aws-sdk/types";

export const _LoadBalancerNames: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string",
      min: 1
    }
  }
};
