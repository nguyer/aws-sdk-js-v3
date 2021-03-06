import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RestoreWindow: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EarliestTime: {
      shape: {
        type: "timestamp"
      }
    },
    LatestTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
