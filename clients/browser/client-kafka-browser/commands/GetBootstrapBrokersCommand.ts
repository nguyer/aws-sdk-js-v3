import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBootstrapBrokers } from "../model/operations/GetBootstrapBrokers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBootstrapBrokersInput } from "../types/GetBootstrapBrokersInput";
import { GetBootstrapBrokersOutput } from "../types/GetBootstrapBrokersOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/GetBootstrapBrokersInput";
export * from "../types/GetBootstrapBrokersOutput";
export * from "../types/GetBootstrapBrokersExceptionsUnion";

export class GetBootstrapBrokersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBootstrapBrokersInput,
      OutputTypesUnion,
      GetBootstrapBrokersOutput,
      KafkaResolvedConfiguration,
      Blob
    > {
  readonly model = GetBootstrapBrokers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBootstrapBrokersInput,
    GetBootstrapBrokersOutput,
    Blob
  >();

  constructor(readonly input: GetBootstrapBrokersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBootstrapBrokersInput,
    GetBootstrapBrokersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBootstrapBrokersInput, GetBootstrapBrokersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
