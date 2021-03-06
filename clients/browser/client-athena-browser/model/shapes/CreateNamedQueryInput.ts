import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateNamedQueryInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Database", "QueryString"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Database: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QueryString: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 32
      }
    },
    WorkGroup: {
      shape: {
        type: "string"
      }
    }
  }
};
