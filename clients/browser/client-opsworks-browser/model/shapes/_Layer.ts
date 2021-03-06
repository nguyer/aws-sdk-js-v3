import { _LayerAttributes } from "./_LayerAttributes";
import { _CloudWatchLogsConfiguration } from "./_CloudWatchLogsConfiguration";
import { _Strings } from "./_Strings";
import { _VolumeConfigurations } from "./_VolumeConfigurations";
import { _Recipes } from "./_Recipes";
import { _LifecycleEventConfiguration } from "./_LifecycleEventConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Layer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    LayerId: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Shortname: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _LayerAttributes
    },
    CloudWatchLogsConfiguration: {
      shape: _CloudWatchLogsConfiguration
    },
    CustomInstanceProfileArn: {
      shape: {
        type: "string"
      }
    },
    CustomJson: {
      shape: {
        type: "string"
      }
    },
    CustomSecurityGroupIds: {
      shape: _Strings
    },
    DefaultSecurityGroupNames: {
      shape: _Strings
    },
    Packages: {
      shape: _Strings
    },
    VolumeConfigurations: {
      shape: _VolumeConfigurations
    },
    EnableAutoHealing: {
      shape: {
        type: "boolean"
      }
    },
    AutoAssignElasticIps: {
      shape: {
        type: "boolean"
      }
    },
    AutoAssignPublicIps: {
      shape: {
        type: "boolean"
      }
    },
    DefaultRecipes: {
      shape: _Recipes
    },
    CustomRecipes: {
      shape: _Recipes
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    InstallUpdatesOnBoot: {
      shape: {
        type: "boolean"
      }
    },
    UseEbsOptimizedInstances: {
      shape: {
        type: "boolean"
      }
    },
    LifecycleEventConfiguration: {
      shape: _LifecycleEventConfiguration
    }
  }
};
