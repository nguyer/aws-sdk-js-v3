import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTaskDefinitionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    familyPrefix: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    sort: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
