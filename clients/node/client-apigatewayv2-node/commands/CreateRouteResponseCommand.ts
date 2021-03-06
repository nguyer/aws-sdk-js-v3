import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRouteResponse } from "../model/operations/CreateRouteResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRouteResponseInput } from "../types/CreateRouteResponseInput";
import { CreateRouteResponseOutput } from "../types/CreateRouteResponseOutput";
import { ApiGatewayV2ResolvedConfiguration } from "../ApiGatewayV2Configuration";
export * from "../types/CreateRouteResponseInput";
export * from "../types/CreateRouteResponseOutput";
export * from "../types/CreateRouteResponseExceptionsUnion";

export class CreateRouteResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRouteResponseInput,
      OutputTypesUnion,
      CreateRouteResponseOutput,
      ApiGatewayV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRouteResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRouteResponseInput,
    CreateRouteResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRouteResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApiGatewayV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRouteResponseInput,
    CreateRouteResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRouteResponseInput, CreateRouteResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
