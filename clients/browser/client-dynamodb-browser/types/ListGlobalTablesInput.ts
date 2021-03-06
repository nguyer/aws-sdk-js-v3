import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGlobalTablesInput shape
 */
export interface ListGlobalTablesInput {
  /**
   * <p>The first global table name that this operation will evaluate.</p>
   */
  ExclusiveStartGlobalTableName?: string;

  /**
   * <p>The maximum number of table names to return.</p>
   */
  Limit?: number;

  /**
   * <p>Lists the global tables in a specific Region.</p>
   */
  RegionName?: string;

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
