import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSpeechSynthesisTasks } from "../model/operations/ListSpeechSynthesisTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSpeechSynthesisTasksInput } from "../types/ListSpeechSynthesisTasksInput";
import { ListSpeechSynthesisTasksOutput } from "../types/ListSpeechSynthesisTasksOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/ListSpeechSynthesisTasksInput";
export * from "../types/ListSpeechSynthesisTasksOutput";
export * from "../types/ListSpeechSynthesisTasksExceptionsUnion";

export class ListSpeechSynthesisTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSpeechSynthesisTasksInput,
      OutputTypesUnion,
      ListSpeechSynthesisTasksOutput,
      PollyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSpeechSynthesisTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSpeechSynthesisTasksInput,
    ListSpeechSynthesisTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSpeechSynthesisTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSpeechSynthesisTasksInput,
    ListSpeechSynthesisTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSpeechSynthesisTasksInput, ListSpeechSynthesisTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
