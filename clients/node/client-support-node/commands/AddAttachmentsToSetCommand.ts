import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddAttachmentsToSet } from "../model/operations/AddAttachmentsToSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddAttachmentsToSetInput } from "../types/AddAttachmentsToSetInput";
import { AddAttachmentsToSetOutput } from "../types/AddAttachmentsToSetOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/AddAttachmentsToSetInput";
export * from "../types/AddAttachmentsToSetOutput";
export * from "../types/AddAttachmentsToSetExceptionsUnion";

export class AddAttachmentsToSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddAttachmentsToSetInput,
      OutputTypesUnion,
      AddAttachmentsToSetOutput,
      SupportResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddAttachmentsToSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddAttachmentsToSetInput,
    AddAttachmentsToSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddAttachmentsToSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddAttachmentsToSetInput,
    AddAttachmentsToSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddAttachmentsToSetInput, AddAttachmentsToSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
