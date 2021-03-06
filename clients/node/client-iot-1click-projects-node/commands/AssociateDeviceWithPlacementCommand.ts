import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateDeviceWithPlacement } from "../model/operations/AssociateDeviceWithPlacement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDeviceWithPlacementInput } from "../types/AssociateDeviceWithPlacementInput";
import { AssociateDeviceWithPlacementOutput } from "../types/AssociateDeviceWithPlacementOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/AssociateDeviceWithPlacementInput";
export * from "../types/AssociateDeviceWithPlacementOutput";
export * from "../types/AssociateDeviceWithPlacementExceptionsUnion";

export class AssociateDeviceWithPlacementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDeviceWithPlacementInput,
      OutputTypesUnion,
      AssociateDeviceWithPlacementOutput,
      IoT1ClickProjectsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateDeviceWithPlacement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDeviceWithPlacementInput,
    AssociateDeviceWithPlacementOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateDeviceWithPlacementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateDeviceWithPlacementInput,
    AssociateDeviceWithPlacementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateDeviceWithPlacementInput,
        AssociateDeviceWithPlacementOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
