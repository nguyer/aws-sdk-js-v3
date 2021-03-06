import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopDeployment } from "../model/operations/StopDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopDeploymentInput } from "../types/StopDeploymentInput";
import { StopDeploymentOutput } from "../types/StopDeploymentOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/StopDeploymentInput";
export * from "../types/StopDeploymentOutput";
export * from "../types/StopDeploymentExceptionsUnion";

export class StopDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopDeploymentInput,
      OutputTypesUnion,
      StopDeploymentOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopDeploymentInput,
    StopDeploymentOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<StopDeploymentInput, StopDeploymentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopDeploymentInput, StopDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
