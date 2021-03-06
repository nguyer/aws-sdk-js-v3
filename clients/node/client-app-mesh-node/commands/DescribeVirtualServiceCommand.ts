import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVirtualService } from "../model/operations/DescribeVirtualService";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVirtualServiceInput } from "../types/DescribeVirtualServiceInput";
import { DescribeVirtualServiceOutput } from "../types/DescribeVirtualServiceOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DescribeVirtualServiceInput";
export * from "../types/DescribeVirtualServiceOutput";
export * from "../types/DescribeVirtualServiceExceptionsUnion";

export class DescribeVirtualServiceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVirtualServiceInput,
      OutputTypesUnion,
      DescribeVirtualServiceOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVirtualService;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVirtualServiceInput,
    DescribeVirtualServiceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVirtualServiceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVirtualServiceInput,
    DescribeVirtualServiceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVirtualServiceInput, DescribeVirtualServiceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
