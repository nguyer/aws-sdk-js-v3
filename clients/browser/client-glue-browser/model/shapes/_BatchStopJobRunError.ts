import { _ErrorDetail } from "./_ErrorDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchStopJobRunError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobRunId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorDetail: {
      shape: _ErrorDetail
    }
  }
};
