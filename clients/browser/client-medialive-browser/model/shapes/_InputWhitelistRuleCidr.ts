import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputWhitelistRuleCidr: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Cidr: {
      shape: {
        type: "string"
      },
      locationName: "cidr"
    }
  }
};
