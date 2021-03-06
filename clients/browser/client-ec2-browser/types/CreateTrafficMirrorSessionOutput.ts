import { _UnmarshalledTrafficMirrorSession } from "./_TrafficMirrorSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTrafficMirrorSessionOutput shape
 */
export interface CreateTrafficMirrorSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Traffic Mirror session.</p>
   */
  TrafficMirrorSession?: _UnmarshalledTrafficMirrorSession;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
