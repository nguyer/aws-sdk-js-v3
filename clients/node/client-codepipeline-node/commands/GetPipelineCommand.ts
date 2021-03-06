import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPipeline } from "../model/operations/GetPipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPipelineInput } from "../types/GetPipelineInput";
import { GetPipelineOutput } from "../types/GetPipelineOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/GetPipelineInput";
export * from "../types/GetPipelineOutput";
export * from "../types/GetPipelineExceptionsUnion";

export class GetPipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPipelineInput,
      OutputTypesUnion,
      GetPipelineOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPipelineInput,
    GetPipelineOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPipelineInput, GetPipelineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPipelineInput, GetPipelineOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
