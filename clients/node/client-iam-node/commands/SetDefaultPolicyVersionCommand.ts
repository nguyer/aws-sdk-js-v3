import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetDefaultPolicyVersion } from "../model/operations/SetDefaultPolicyVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetDefaultPolicyVersionInput } from "../types/SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "../types/SetDefaultPolicyVersionOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/SetDefaultPolicyVersionInput";
export * from "../types/SetDefaultPolicyVersionOutput";
export * from "../types/SetDefaultPolicyVersionExceptionsUnion";

export class SetDefaultPolicyVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetDefaultPolicyVersionInput,
      OutputTypesUnion,
      SetDefaultPolicyVersionOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetDefaultPolicyVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetDefaultPolicyVersionInput,
    SetDefaultPolicyVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetDefaultPolicyVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetDefaultPolicyVersionInput,
    SetDefaultPolicyVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetDefaultPolicyVersionInput, SetDefaultPolicyVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
