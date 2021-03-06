import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersInGroupInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "GroupName"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
