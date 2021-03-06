import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachVolume } from "../model/operations/DetachVolume";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachVolumeInput } from "../types/DetachVolumeInput";
import { DetachVolumeOutput } from "../types/DetachVolumeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DetachVolumeInput";
export * from "../types/DetachVolumeOutput";
export * from "../types/DetachVolumeExceptionsUnion";

export class DetachVolumeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachVolumeInput,
      OutputTypesUnion,
      DetachVolumeOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DetachVolume;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachVolumeInput,
    DetachVolumeOutput,
    Blob
  >();

  constructor(readonly input: DetachVolumeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachVolumeInput, DetachVolumeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachVolumeInput, DetachVolumeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
