import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeParameterGroups } from "../model/operations/DescribeParameterGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeParameterGroupsInput } from "../types/DescribeParameterGroupsInput";
import { DescribeParameterGroupsOutput } from "../types/DescribeParameterGroupsOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DescribeParameterGroupsInput";
export * from "../types/DescribeParameterGroupsOutput";
export * from "../types/DescribeParameterGroupsExceptionsUnion";

export class DescribeParameterGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeParameterGroupsInput,
      OutputTypesUnion,
      DescribeParameterGroupsOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeParameterGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeParameterGroupsInput,
    DescribeParameterGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeParameterGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeParameterGroupsInput,
    DescribeParameterGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeParameterGroupsInput, DescribeParameterGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
