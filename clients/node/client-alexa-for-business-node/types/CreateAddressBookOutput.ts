import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAddressBookOutput shape
 */
export interface CreateAddressBookOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the newly created address book.</p>
   */
  AddressBookArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
