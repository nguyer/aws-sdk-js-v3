import { List as _List_ } from "@aws-sdk/types";
import { _InstanceProfile } from "./_InstanceProfile";

export const _instanceProfileListType: _List_ = {
  type: "list",
  member: {
    shape: _InstanceProfile
  }
};
