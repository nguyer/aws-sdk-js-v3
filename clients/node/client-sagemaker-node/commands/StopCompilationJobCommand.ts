import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopCompilationJob } from "../model/operations/StopCompilationJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopCompilationJobInput } from "../types/StopCompilationJobInput";
import { StopCompilationJobOutput } from "../types/StopCompilationJobOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/StopCompilationJobInput";
export * from "../types/StopCompilationJobOutput";
export * from "../types/StopCompilationJobExceptionsUnion";

export class StopCompilationJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopCompilationJobInput,
      OutputTypesUnion,
      StopCompilationJobOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopCompilationJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopCompilationJobInput,
    StopCompilationJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopCompilationJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopCompilationJobInput,
    StopCompilationJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopCompilationJobInput, StopCompilationJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
