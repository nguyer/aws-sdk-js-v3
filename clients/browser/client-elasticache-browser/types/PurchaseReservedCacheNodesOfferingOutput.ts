import { _UnmarshalledReservedCacheNode } from "./_ReservedCacheNode";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PurchaseReservedCacheNodesOfferingOutput shape
 */
export interface PurchaseReservedCacheNodesOfferingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the output of a <code>PurchaseReservedCacheNodesOffering</code> operation.</p>
   */
  ReservedCacheNode?: _UnmarshalledReservedCacheNode;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
