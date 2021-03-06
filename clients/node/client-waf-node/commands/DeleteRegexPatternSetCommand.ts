import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRegexPatternSet } from "../model/operations/DeleteRegexPatternSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRegexPatternSetInput } from "../types/DeleteRegexPatternSetInput";
import { DeleteRegexPatternSetOutput } from "../types/DeleteRegexPatternSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/DeleteRegexPatternSetInput";
export * from "../types/DeleteRegexPatternSetOutput";
export * from "../types/DeleteRegexPatternSetExceptionsUnion";

export class DeleteRegexPatternSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRegexPatternSetInput,
      OutputTypesUnion,
      DeleteRegexPatternSetOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRegexPatternSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRegexPatternSetInput,
    DeleteRegexPatternSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRegexPatternSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRegexPatternSetInput,
    DeleteRegexPatternSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRegexPatternSetInput, DeleteRegexPatternSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
