import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeParameters } from "../model/operations/DescribeParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeParametersInput } from "../types/DescribeParametersInput";
import { DescribeParametersOutput } from "../types/DescribeParametersOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DescribeParametersInput";
export * from "../types/DescribeParametersOutput";
export * from "../types/DescribeParametersExceptionsUnion";

export class DescribeParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeParametersInput,
      OutputTypesUnion,
      DescribeParametersOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeParametersInput,
    DescribeParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeParametersInput,
    DescribeParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeParametersInput, DescribeParametersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
