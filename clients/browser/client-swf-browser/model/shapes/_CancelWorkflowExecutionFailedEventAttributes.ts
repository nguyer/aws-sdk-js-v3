import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancelWorkflowExecutionFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["cause", "decisionTaskCompletedEventId"],
  members: {
    cause: {
      shape: {
        type: "string"
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
