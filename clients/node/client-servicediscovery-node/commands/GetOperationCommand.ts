import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetOperation } from "../model/operations/GetOperation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetOperationInput } from "../types/GetOperationInput";
import { GetOperationOutput } from "../types/GetOperationOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/GetOperationInput";
export * from "../types/GetOperationOutput";
export * from "../types/GetOperationExceptionsUnion";

export class GetOperationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetOperationInput,
      OutputTypesUnion,
      GetOperationOutput,
      ServiceDiscoveryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetOperation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetOperationInput,
    GetOperationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetOperationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetOperationInput, GetOperationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetOperationInput, GetOperationOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
