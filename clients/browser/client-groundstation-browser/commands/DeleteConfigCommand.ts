import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfig } from "../model/operations/DeleteConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigInput } from "../types/DeleteConfigInput";
import { DeleteConfigOutput } from "../types/DeleteConfigOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/DeleteConfigInput";
export * from "../types/DeleteConfigOutput";
export * from "../types/DeleteConfigExceptionsUnion";

export class DeleteConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigInput,
      OutputTypesUnion,
      DeleteConfigOutput,
      GroundStationResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigInput,
    DeleteConfigOutput,
    Blob
  >();

  constructor(readonly input: DeleteConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteConfigInput, DeleteConfigOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteConfigInput, DeleteConfigOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
