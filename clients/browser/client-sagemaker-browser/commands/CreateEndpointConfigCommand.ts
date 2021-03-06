import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateEndpointConfig } from "../model/operations/CreateEndpointConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEndpointConfigInput } from "../types/CreateEndpointConfigInput";
import { CreateEndpointConfigOutput } from "../types/CreateEndpointConfigOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateEndpointConfigInput";
export * from "../types/CreateEndpointConfigOutput";
export * from "../types/CreateEndpointConfigExceptionsUnion";

export class CreateEndpointConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEndpointConfigInput,
      OutputTypesUnion,
      CreateEndpointConfigOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateEndpointConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEndpointConfigInput,
    CreateEndpointConfigOutput,
    Blob
  >();

  constructor(readonly input: CreateEndpointConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEndpointConfigInput,
    CreateEndpointConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateEndpointConfigInput, CreateEndpointConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
