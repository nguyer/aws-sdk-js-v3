import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p> <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
 */
export interface UpdateBatchPredictionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID assigned to the <code>BatchPrediction</code> during creation. This value should be identical to the value of the <code>BatchPredictionId</code> in the request.</p>
   */
  BatchPredictionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
