import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateKeyPair } from "../model/operations/CreateKeyPair";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateKeyPairInput } from "../types/CreateKeyPairInput";
import { CreateKeyPairOutput } from "../types/CreateKeyPairOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/CreateKeyPairInput";
export * from "../types/CreateKeyPairOutput";
export * from "../types/CreateKeyPairExceptionsUnion";

export class CreateKeyPairCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateKeyPairInput,
      OutputTypesUnion,
      CreateKeyPairOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = CreateKeyPair;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateKeyPairInput,
    CreateKeyPairOutput,
    Blob
  >();

  constructor(readonly input: CreateKeyPairInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateKeyPairInput, CreateKeyPairOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateKeyPairInput, CreateKeyPairOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
