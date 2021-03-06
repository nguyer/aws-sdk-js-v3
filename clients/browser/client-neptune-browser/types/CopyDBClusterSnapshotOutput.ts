import { _UnmarshalledDBClusterSnapshot } from "./_DBClusterSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyDBClusterSnapshotOutput shape
 */
export interface CopyDBClusterSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   */
  DBClusterSnapshot?: _UnmarshalledDBClusterSnapshot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
