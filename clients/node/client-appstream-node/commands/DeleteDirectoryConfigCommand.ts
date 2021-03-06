import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDirectoryConfig } from "../model/operations/DeleteDirectoryConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDirectoryConfigInput } from "../types/DeleteDirectoryConfigInput";
import { DeleteDirectoryConfigOutput } from "../types/DeleteDirectoryConfigOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DeleteDirectoryConfigInput";
export * from "../types/DeleteDirectoryConfigOutput";
export * from "../types/DeleteDirectoryConfigExceptionsUnion";

export class DeleteDirectoryConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDirectoryConfigInput,
      OutputTypesUnion,
      DeleteDirectoryConfigOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDirectoryConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDirectoryConfigInput,
    DeleteDirectoryConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDirectoryConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDirectoryConfigInput,
    DeleteDirectoryConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDirectoryConfigInput, DeleteDirectoryConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
