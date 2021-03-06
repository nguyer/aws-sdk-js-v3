import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ImportMigrationTask } from "../model/operations/ImportMigrationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportMigrationTaskInput } from "../types/ImportMigrationTaskInput";
import { ImportMigrationTaskOutput } from "../types/ImportMigrationTaskOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/ImportMigrationTaskInput";
export * from "../types/ImportMigrationTaskOutput";
export * from "../types/ImportMigrationTaskExceptionsUnion";

export class ImportMigrationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportMigrationTaskInput,
      OutputTypesUnion,
      ImportMigrationTaskOutput,
      MigrationHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ImportMigrationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportMigrationTaskInput,
    ImportMigrationTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: ImportMigrationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportMigrationTaskInput,
    ImportMigrationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportMigrationTaskInput, ImportMigrationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
