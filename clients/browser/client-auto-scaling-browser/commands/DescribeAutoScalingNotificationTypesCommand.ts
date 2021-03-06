import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAutoScalingNotificationTypes } from "../model/operations/DescribeAutoScalingNotificationTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAutoScalingNotificationTypesInput } from "../types/DescribeAutoScalingNotificationTypesInput";
import { DescribeAutoScalingNotificationTypesOutput } from "../types/DescribeAutoScalingNotificationTypesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeAutoScalingNotificationTypesInput";
export * from "../types/DescribeAutoScalingNotificationTypesOutput";
export * from "../types/DescribeAutoScalingNotificationTypesExceptionsUnion";

export class DescribeAutoScalingNotificationTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAutoScalingNotificationTypesInput,
      OutputTypesUnion,
      DescribeAutoScalingNotificationTypesOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAutoScalingNotificationTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAutoScalingNotificationTypesInput,
    DescribeAutoScalingNotificationTypesOutput,
    Blob
  >();

  constructor(readonly input: DescribeAutoScalingNotificationTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAutoScalingNotificationTypesInput,
    DescribeAutoScalingNotificationTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAutoScalingNotificationTypesInput,
        DescribeAutoScalingNotificationTypesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
