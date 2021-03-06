import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateChapCredentials } from "../model/operations/UpdateChapCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateChapCredentialsInput } from "../types/UpdateChapCredentialsInput";
import { UpdateChapCredentialsOutput } from "../types/UpdateChapCredentialsOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateChapCredentialsInput";
export * from "../types/UpdateChapCredentialsOutput";
export * from "../types/UpdateChapCredentialsExceptionsUnion";

export class UpdateChapCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateChapCredentialsInput,
      OutputTypesUnion,
      UpdateChapCredentialsOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateChapCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateChapCredentialsInput,
    UpdateChapCredentialsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateChapCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateChapCredentialsInput,
    UpdateChapCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateChapCredentialsInput, UpdateChapCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
