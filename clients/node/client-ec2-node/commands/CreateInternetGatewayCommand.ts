import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateInternetGateway } from "../model/operations/CreateInternetGateway";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateInternetGatewayInput } from "../types/CreateInternetGatewayInput";
import { CreateInternetGatewayOutput } from "../types/CreateInternetGatewayOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateInternetGatewayInput";
export * from "../types/CreateInternetGatewayOutput";
export * from "../types/CreateInternetGatewayExceptionsUnion";

export class CreateInternetGatewayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateInternetGatewayInput,
      OutputTypesUnion,
      CreateInternetGatewayOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateInternetGateway;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateInternetGatewayInput,
    CreateInternetGatewayOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateInternetGatewayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateInternetGatewayInput,
    CreateInternetGatewayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateInternetGatewayInput, CreateInternetGatewayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
