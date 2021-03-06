import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSecretVersionIds } from "../model/operations/ListSecretVersionIds";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSecretVersionIdsInput } from "../types/ListSecretVersionIdsInput";
import { ListSecretVersionIdsOutput } from "../types/ListSecretVersionIdsOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/ListSecretVersionIdsInput";
export * from "../types/ListSecretVersionIdsOutput";
export * from "../types/ListSecretVersionIdsExceptionsUnion";

export class ListSecretVersionIdsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSecretVersionIdsInput,
      OutputTypesUnion,
      ListSecretVersionIdsOutput,
      SecretsManagerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSecretVersionIds;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSecretVersionIdsInput,
    ListSecretVersionIdsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSecretVersionIdsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSecretVersionIdsInput,
    ListSecretVersionIdsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSecretVersionIdsInput, ListSecretVersionIdsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
