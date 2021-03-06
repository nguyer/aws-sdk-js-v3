import { _SamplingRuleRecord } from "./_SamplingRuleRecord";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSamplingRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SamplingRuleRecord: {
      shape: _SamplingRuleRecord
    }
  }
};
