import { _UnmarshalledHealthCheck } from "./_HealthCheck";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the response to the <code>UpdateHealthCheck</code> request.</p>
 */
export interface UpdateHealthCheckOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains the response to an <code>UpdateHealthCheck</code> request.</p>
   */
  HealthCheck: _UnmarshalledHealthCheck;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
