import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMaintenanceWindowExecutionTaskInput shape
 */
export interface GetMaintenanceWindowExecutionTaskInput {
  /**
   * <p>The ID of the maintenance window execution that includes the task.</p>
   */
  WindowExecutionId: string;

  /**
   * <p>The ID of the specific task execution in the maintenance window task that should be retrieved.</p>
   */
  TaskId: string;

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
