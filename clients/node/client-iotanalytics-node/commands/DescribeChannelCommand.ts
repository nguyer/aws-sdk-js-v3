import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeChannel } from "../model/operations/DescribeChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeChannelInput } from "../types/DescribeChannelInput";
import { DescribeChannelOutput } from "../types/DescribeChannelOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/DescribeChannelInput";
export * from "../types/DescribeChannelOutput";
export * from "../types/DescribeChannelExceptionsUnion";

export class DescribeChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeChannelInput,
      OutputTypesUnion,
      DescribeChannelOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeChannelInput,
    DescribeChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeChannelInput, DescribeChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeChannelInput, DescribeChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
