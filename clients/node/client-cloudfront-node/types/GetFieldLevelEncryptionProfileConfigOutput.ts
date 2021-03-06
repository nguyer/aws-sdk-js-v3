import { _UnmarshalledFieldLevelEncryptionProfileConfig } from "./_FieldLevelEncryptionProfileConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFieldLevelEncryptionProfileConfigOutput shape
 */
export interface GetFieldLevelEncryptionProfileConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Return the field-level encryption profile configuration information.</p>
   */
  FieldLevelEncryptionProfileConfig?: _UnmarshalledFieldLevelEncryptionProfileConfig;

  /**
   * <p>The current version of the field-level encryption profile configuration result. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
