import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateIntegration } from "../model/operations/UpdateIntegration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateIntegrationInput } from "../types/UpdateIntegrationInput";
import { UpdateIntegrationOutput } from "../types/UpdateIntegrationOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateIntegrationInput";
export * from "../types/UpdateIntegrationOutput";
export * from "../types/UpdateIntegrationExceptionsUnion";

export class UpdateIntegrationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateIntegrationInput,
      OutputTypesUnion,
      UpdateIntegrationOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateIntegration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateIntegrationInput,
    UpdateIntegrationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateIntegrationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateIntegrationInput, UpdateIntegrationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateIntegrationInput, UpdateIntegrationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
