import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCallerIdentity } from "../model/operations/GetCallerIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCallerIdentityInput } from "../types/GetCallerIdentityInput";
import { GetCallerIdentityOutput } from "../types/GetCallerIdentityOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/GetCallerIdentityInput";
export * from "../types/GetCallerIdentityOutput";
export * from "../types/GetCallerIdentityExceptionsUnion";

export class GetCallerIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCallerIdentityInput,
      OutputTypesUnion,
      GetCallerIdentityOutput,
      STSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCallerIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCallerIdentityInput,
    GetCallerIdentityOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCallerIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCallerIdentityInput, GetCallerIdentityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCallerIdentityInput, GetCallerIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
