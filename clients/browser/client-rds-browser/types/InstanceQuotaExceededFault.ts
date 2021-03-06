import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in the user exceeding the allowed number of DB instances.</p>
 */
export interface InstanceQuotaExceededFault
  extends __ServiceException__<_InstanceQuotaExceededFaultDetails> {
  name: "InstanceQuotaExceededFault";
}

export interface _InstanceQuotaExceededFaultDetails {}
