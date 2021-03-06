import { _EnvironmentMember } from "./_EnvironmentMember";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEnvironmentMembershipOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    membership: {
      shape: _EnvironmentMember
    }
  }
};
