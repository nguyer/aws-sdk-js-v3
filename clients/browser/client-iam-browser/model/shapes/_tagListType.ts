import { List as _List_ } from "@aws-sdk/types";
import { _Tag } from "./_Tag";

export const _tagListType: _List_ = {
  type: "list",
  member: {
    shape: _Tag
  }
};
