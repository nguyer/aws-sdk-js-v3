import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopFleet } from "../model/operations/StopFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopFleetInput } from "../types/StopFleetInput";
import { StopFleetOutput } from "../types/StopFleetOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/StopFleetInput";
export * from "../types/StopFleetOutput";
export * from "../types/StopFleetExceptionsUnion";

export class StopFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopFleetInput,
      OutputTypesUnion,
      StopFleetOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopFleetInput,
    StopFleetOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<StopFleetInput, StopFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopFleetInput, StopFleetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
