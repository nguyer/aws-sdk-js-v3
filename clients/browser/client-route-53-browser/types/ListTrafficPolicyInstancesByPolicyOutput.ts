import { _UnmarshalledTrafficPolicyInstance } from "./_TrafficPolicyInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the response information for the request.</p>
 */
export interface ListTrafficPolicyInstancesByPolicyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains one <code>TrafficPolicyInstance</code> element for each traffic policy instance that matches the elements in the request.</p>
   */
  TrafficPolicyInstances: Array<_UnmarshalledTrafficPolicyInstance>;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>HostedZoneIdMarker</code> is the ID of the hosted zone of the first traffic policy instance in the next group of traffic policy instances.</p>
   */
  HostedZoneIdMarker?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceNameMarker</code> is the name of the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.</p>
   */
  TrafficPolicyInstanceNameMarker?: string;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, <code>TrafficPolicyInstanceTypeMarker</code> is the DNS type of the resource record sets that are associated with the first traffic policy instance in the next group of <code>MaxItems</code> traffic policy instances.</p>
   */
  TrafficPolicyInstanceTypeMarker?:
    | "SOA"
    | "A"
    | "TXT"
    | "NS"
    | "CNAME"
    | "MX"
    | "NAPTR"
    | "PTR"
    | "SRV"
    | "SPF"
    | "AAAA"
    | "CAA"
    | string;

  /**
   * <p>A flag that indicates whether there are more traffic policy instances to be listed. If the response was truncated, you can get the next group of traffic policy instances by calling <code>ListTrafficPolicyInstancesByPolicy</code> again and specifying the values of the <code>HostedZoneIdMarker</code>, <code>TrafficPolicyInstanceNameMarker</code>, and <code>TrafficPolicyInstanceTypeMarker</code> elements in the corresponding request parameters.</p>
   */
  IsTruncated: boolean;

  /**
   * <p>The value that you specified for the <code>MaxItems</code> parameter in the call to <code>ListTrafficPolicyInstancesByPolicy</code> that produced the current response.</p>
   */
  MaxItems: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
