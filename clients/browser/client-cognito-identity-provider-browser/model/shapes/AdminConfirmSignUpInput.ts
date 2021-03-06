import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminConfirmSignUpInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
