import { _UnmarshalledPortfolioDetail } from "./_PortfolioDetail";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePortfolioOutput shape
 */
export interface CreatePortfolioOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the portfolio.</p>
   */
  PortfolioDetail?: _UnmarshalledPortfolioDetail;

  /**
   * <p>Information about the tags associated with the portfolio.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
