import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDevEndpoints } from "../model/operations/GetDevEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDevEndpointsInput } from "../types/GetDevEndpointsInput";
import { GetDevEndpointsOutput } from "../types/GetDevEndpointsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetDevEndpointsInput";
export * from "../types/GetDevEndpointsOutput";
export * from "../types/GetDevEndpointsExceptionsUnion";

export class GetDevEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDevEndpointsInput,
      OutputTypesUnion,
      GetDevEndpointsOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDevEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDevEndpointsInput,
    GetDevEndpointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDevEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDevEndpointsInput, GetDevEndpointsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDevEndpointsInput, GetDevEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
