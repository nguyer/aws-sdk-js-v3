/**
 * <p>Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.</p>
 */
export interface _InputLambdaProcessorUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the new <a href="https://docs.aws.amazon.com/ambda/">AWS Lambda</a> function that is used to preprocess the records in the stream.</p> <note> <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a> </p> </note>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>The ARN of the new IAM role that is used to access the AWS Lambda function.</p>
   */
  RoleARNUpdate?: string;
}

export type _UnmarshalledInputLambdaProcessorUpdate = _InputLambdaProcessorUpdate;
