import { _AccountIdList } from "./_AccountIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeclineInvitationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountIds: {
      shape: _AccountIdList
    }
  }
};
