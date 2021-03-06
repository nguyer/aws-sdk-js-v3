import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachElasticLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["ElasticLoadBalancerName", "LayerId"],
  members: {
    ElasticLoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    LayerId: {
      shape: {
        type: "string"
      }
    }
  }
};
