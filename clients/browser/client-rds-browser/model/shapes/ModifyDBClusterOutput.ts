import { _DBCluster } from "./_DBCluster";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBCluster: {
      shape: _DBCluster
    }
  }
};
