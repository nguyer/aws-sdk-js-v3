import { _Job } from "./_Job";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReadJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Job: {
      shape: _Job
    }
  }
};
