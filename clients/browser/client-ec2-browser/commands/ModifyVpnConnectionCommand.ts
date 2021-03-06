import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyVpnConnection } from "../model/operations/ModifyVpnConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpnConnectionInput } from "../types/ModifyVpnConnectionInput";
import { ModifyVpnConnectionOutput } from "../types/ModifyVpnConnectionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpnConnectionInput";
export * from "../types/ModifyVpnConnectionOutput";
export * from "../types/ModifyVpnConnectionExceptionsUnion";

export class ModifyVpnConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpnConnectionInput,
      OutputTypesUnion,
      ModifyVpnConnectionOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyVpnConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpnConnectionInput,
    ModifyVpnConnectionOutput,
    Blob
  >();

  constructor(readonly input: ModifyVpnConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyVpnConnectionInput,
    ModifyVpnConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyVpnConnectionInput, ModifyVpnConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
