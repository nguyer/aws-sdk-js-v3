import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableUser } from "../model/operations/DisableUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableUserInput } from "../types/DisableUserInput";
import { DisableUserOutput } from "../types/DisableUserOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DisableUserInput";
export * from "../types/DisableUserOutput";
export * from "../types/DisableUserExceptionsUnion";

export class DisableUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableUserInput,
      OutputTypesUnion,
      DisableUserOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DisableUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableUserInput,
    DisableUserOutput,
    Blob
  >();

  constructor(readonly input: DisableUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableUserInput, DisableUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableUserInput, DisableUserOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
