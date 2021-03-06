import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplatePlacement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Affinity: {
      shape: {
        type: "string"
      },
      locationName: "affinity"
    },
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
    },
    HostId: {
      shape: {
        type: "string"
      },
      locationName: "hostId"
    },
    Tenancy: {
      shape: {
        type: "string"
      },
      locationName: "tenancy"
    },
    SpreadDomain: {
      shape: {
        type: "string"
      },
      locationName: "spreadDomain"
    }
  }
};
