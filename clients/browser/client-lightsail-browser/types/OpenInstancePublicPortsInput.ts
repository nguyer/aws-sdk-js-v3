import { _PortInfo } from "./_PortInfo";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * OpenInstancePublicPortsInput shape
 */
export interface OpenInstancePublicPortsInput {
  /**
   * <p>An array of key-value pairs containing information about the port mappings.</p>
   */
  portInfo: _PortInfo;

  /**
   * <p>The name of the instance for which you want to open the public ports.</p>
   */
  instanceName: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
