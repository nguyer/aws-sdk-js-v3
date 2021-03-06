import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEventSourceMapping } from "../model/operations/DeleteEventSourceMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEventSourceMappingInput } from "../types/DeleteEventSourceMappingInput";
import { DeleteEventSourceMappingOutput } from "../types/DeleteEventSourceMappingOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/DeleteEventSourceMappingInput";
export * from "../types/DeleteEventSourceMappingOutput";
export * from "../types/DeleteEventSourceMappingExceptionsUnion";

export class DeleteEventSourceMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEventSourceMappingInput,
      OutputTypesUnion,
      DeleteEventSourceMappingOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteEventSourceMapping;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEventSourceMappingInput,
    DeleteEventSourceMappingOutput,
    Blob
  >();

  constructor(readonly input: DeleteEventSourceMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEventSourceMappingInput,
    DeleteEventSourceMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteEventSourceMappingInput, DeleteEventSourceMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
