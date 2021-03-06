import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDevicePolicyConfiguration } from "../model/operations/UpdateDevicePolicyConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDevicePolicyConfigurationInput } from "../types/UpdateDevicePolicyConfigurationInput";
import { UpdateDevicePolicyConfigurationOutput } from "../types/UpdateDevicePolicyConfigurationOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/UpdateDevicePolicyConfigurationInput";
export * from "../types/UpdateDevicePolicyConfigurationOutput";
export * from "../types/UpdateDevicePolicyConfigurationExceptionsUnion";

export class UpdateDevicePolicyConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDevicePolicyConfigurationInput,
      OutputTypesUnion,
      UpdateDevicePolicyConfigurationOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDevicePolicyConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDevicePolicyConfigurationInput,
    UpdateDevicePolicyConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDevicePolicyConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDevicePolicyConfigurationInput,
    UpdateDevicePolicyConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateDevicePolicyConfigurationInput,
        UpdateDevicePolicyConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
