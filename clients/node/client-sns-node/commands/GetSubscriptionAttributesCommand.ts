import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSubscriptionAttributes } from "../model/operations/GetSubscriptionAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSubscriptionAttributesInput } from "../types/GetSubscriptionAttributesInput";
import { GetSubscriptionAttributesOutput } from "../types/GetSubscriptionAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/GetSubscriptionAttributesInput";
export * from "../types/GetSubscriptionAttributesOutput";
export * from "../types/GetSubscriptionAttributesExceptionsUnion";

export class GetSubscriptionAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSubscriptionAttributesInput,
      OutputTypesUnion,
      GetSubscriptionAttributesOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSubscriptionAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSubscriptionAttributesInput,
    GetSubscriptionAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSubscriptionAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSubscriptionAttributesInput,
    GetSubscriptionAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSubscriptionAttributesInput, GetSubscriptionAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
