import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTriggersOutput shape
 */
export interface ListTriggersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   */
  TriggerNames?: Array<string>;

  /**
   * <p>A continuation token, if the returned list does not contain the last metric available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
