import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListJobExecutionsForJob } from "../model/operations/ListJobExecutionsForJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListJobExecutionsForJobInput } from "../types/ListJobExecutionsForJobInput";
import { ListJobExecutionsForJobOutput } from "../types/ListJobExecutionsForJobOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListJobExecutionsForJobInput";
export * from "../types/ListJobExecutionsForJobOutput";
export * from "../types/ListJobExecutionsForJobExceptionsUnion";

export class ListJobExecutionsForJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListJobExecutionsForJobInput,
      OutputTypesUnion,
      ListJobExecutionsForJobOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListJobExecutionsForJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListJobExecutionsForJobInput,
    ListJobExecutionsForJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListJobExecutionsForJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListJobExecutionsForJobInput,
    ListJobExecutionsForJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListJobExecutionsForJobInput, ListJobExecutionsForJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
