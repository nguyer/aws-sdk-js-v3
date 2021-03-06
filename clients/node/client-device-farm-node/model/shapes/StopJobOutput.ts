import { _Job } from "./_Job";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    job: {
      shape: _Job
    }
  }
};
