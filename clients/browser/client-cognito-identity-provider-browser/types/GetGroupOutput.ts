import { _UnmarshalledGroupType } from "./_GroupType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGroupOutput shape
 */
export interface GetGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The group object for the group.</p>
   */
  Group?: _UnmarshalledGroupType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
