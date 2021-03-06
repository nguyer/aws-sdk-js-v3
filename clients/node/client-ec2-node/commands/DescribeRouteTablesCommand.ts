import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeRouteTables } from "../model/operations/DescribeRouteTables";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRouteTablesInput } from "../types/DescribeRouteTablesInput";
import { DescribeRouteTablesOutput } from "../types/DescribeRouteTablesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeRouteTablesInput";
export * from "../types/DescribeRouteTablesOutput";
export * from "../types/DescribeRouteTablesExceptionsUnion";

export class DescribeRouteTablesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRouteTablesInput,
      OutputTypesUnion,
      DescribeRouteTablesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeRouteTables;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRouteTablesInput,
    DescribeRouteTablesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeRouteTablesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRouteTablesInput,
    DescribeRouteTablesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRouteTablesInput, DescribeRouteTablesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
