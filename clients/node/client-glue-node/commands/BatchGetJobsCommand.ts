import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetJobs } from "../model/operations/BatchGetJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetJobsInput } from "../types/BatchGetJobsInput";
import { BatchGetJobsOutput } from "../types/BatchGetJobsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchGetJobsInput";
export * from "../types/BatchGetJobsOutput";
export * from "../types/BatchGetJobsExceptionsUnion";

export class BatchGetJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetJobsInput,
      OutputTypesUnion,
      BatchGetJobsOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetJobsInput,
    BatchGetJobsOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetJobsInput, BatchGetJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetJobsInput, BatchGetJobsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
