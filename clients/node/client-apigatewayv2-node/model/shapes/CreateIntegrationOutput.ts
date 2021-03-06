import { _IntegrationParameters } from "./_IntegrationParameters";
import { _TemplateMap } from "./_TemplateMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIntegrationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "connectionId"
    },
    ConnectionType: {
      shape: {
        type: "string"
      },
      locationName: "connectionType"
    },
    ContentHandlingStrategy: {
      shape: {
        type: "string"
      },
      locationName: "contentHandlingStrategy"
    },
    CredentialsArn: {
      shape: {
        type: "string"
      },
      locationName: "credentialsArn"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    IntegrationId: {
      shape: {
        type: "string"
      },
      locationName: "integrationId"
    },
    IntegrationMethod: {
      shape: {
        type: "string"
      },
      locationName: "integrationMethod"
    },
    IntegrationResponseSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "integrationResponseSelectionExpression"
    },
    IntegrationType: {
      shape: {
        type: "string"
      },
      locationName: "integrationType"
    },
    IntegrationUri: {
      shape: {
        type: "string"
      },
      locationName: "integrationUri"
    },
    PassthroughBehavior: {
      shape: {
        type: "string"
      },
      locationName: "passthroughBehavior"
    },
    RequestParameters: {
      shape: _IntegrationParameters,
      locationName: "requestParameters"
    },
    RequestTemplates: {
      shape: _TemplateMap,
      locationName: "requestTemplates"
    },
    TemplateSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "templateSelectionExpression"
    },
    TimeoutInMillis: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "timeoutInMillis"
    }
  }
};
