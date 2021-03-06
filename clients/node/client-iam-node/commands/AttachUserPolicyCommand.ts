import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachUserPolicy } from "../model/operations/AttachUserPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachUserPolicyInput } from "../types/AttachUserPolicyInput";
import { AttachUserPolicyOutput } from "../types/AttachUserPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/AttachUserPolicyInput";
export * from "../types/AttachUserPolicyOutput";
export * from "../types/AttachUserPolicyExceptionsUnion";

export class AttachUserPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachUserPolicyInput,
      OutputTypesUnion,
      AttachUserPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachUserPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachUserPolicyInput,
    AttachUserPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachUserPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachUserPolicyInput, AttachUserPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachUserPolicyInput, AttachUserPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
