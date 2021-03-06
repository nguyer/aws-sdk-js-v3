import { _UnmarshalledBatchPrediction } from "./_BatchPrediction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.</p>
 */
export interface DescribeBatchPredictionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>BatchPrediction</code> objects that meet the search criteria. </p>
   */
  Results?: Array<_UnmarshalledBatchPrediction>;

  /**
   * <p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
