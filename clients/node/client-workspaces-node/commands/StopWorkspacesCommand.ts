import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopWorkspaces } from "../model/operations/StopWorkspaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopWorkspacesInput } from "../types/StopWorkspacesInput";
import { StopWorkspacesOutput } from "../types/StopWorkspacesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/StopWorkspacesInput";
export * from "../types/StopWorkspacesOutput";
export * from "../types/StopWorkspacesExceptionsUnion";

export class StopWorkspacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopWorkspacesInput,
      OutputTypesUnion,
      StopWorkspacesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopWorkspaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopWorkspacesInput,
    StopWorkspacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopWorkspacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<StopWorkspacesInput, StopWorkspacesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopWorkspacesInput, StopWorkspacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
