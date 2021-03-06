import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PublishVersion } from "../model/operations/PublishVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PublishVersionInput } from "../types/PublishVersionInput";
import { PublishVersionOutput } from "../types/PublishVersionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/PublishVersionInput";
export * from "../types/PublishVersionOutput";
export * from "../types/PublishVersionExceptionsUnion";

export class PublishVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PublishVersionInput,
      OutputTypesUnion,
      PublishVersionOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = PublishVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PublishVersionInput,
    PublishVersionOutput,
    Blob
  >();

  constructor(readonly input: PublishVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<PublishVersionInput, PublishVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PublishVersionInput, PublishVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
