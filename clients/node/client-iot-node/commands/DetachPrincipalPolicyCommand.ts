import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DetachPrincipalPolicy } from "../model/operations/DetachPrincipalPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachPrincipalPolicyInput } from "../types/DetachPrincipalPolicyInput";
import { DetachPrincipalPolicyOutput } from "../types/DetachPrincipalPolicyOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DetachPrincipalPolicyInput";
export * from "../types/DetachPrincipalPolicyOutput";
export * from "../types/DetachPrincipalPolicyExceptionsUnion";

export class DetachPrincipalPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachPrincipalPolicyInput,
      OutputTypesUnion,
      DetachPrincipalPolicyOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DetachPrincipalPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachPrincipalPolicyInput,
    DetachPrincipalPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: DetachPrincipalPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetachPrincipalPolicyInput,
    DetachPrincipalPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachPrincipalPolicyInput, DetachPrincipalPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
