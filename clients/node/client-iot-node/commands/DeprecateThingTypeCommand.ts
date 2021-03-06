import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeprecateThingType } from "../model/operations/DeprecateThingType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeprecateThingTypeInput } from "../types/DeprecateThingTypeInput";
import { DeprecateThingTypeOutput } from "../types/DeprecateThingTypeOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeprecateThingTypeInput";
export * from "../types/DeprecateThingTypeOutput";
export * from "../types/DeprecateThingTypeExceptionsUnion";

export class DeprecateThingTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeprecateThingTypeInput,
      OutputTypesUnion,
      DeprecateThingTypeOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeprecateThingType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprecateThingTypeInput,
    DeprecateThingTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeprecateThingTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeprecateThingTypeInput,
    DeprecateThingTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeprecateThingTypeInput, DeprecateThingTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
