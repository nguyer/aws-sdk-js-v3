import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRemediationConfigurations } from "../model/operations/PutRemediationConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRemediationConfigurationsInput } from "../types/PutRemediationConfigurationsInput";
import { PutRemediationConfigurationsOutput } from "../types/PutRemediationConfigurationsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutRemediationConfigurationsInput";
export * from "../types/PutRemediationConfigurationsOutput";
export * from "../types/PutRemediationConfigurationsExceptionsUnion";

export class PutRemediationConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRemediationConfigurationsInput,
      OutputTypesUnion,
      PutRemediationConfigurationsOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = PutRemediationConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRemediationConfigurationsInput,
    PutRemediationConfigurationsOutput,
    Blob
  >();

  constructor(readonly input: PutRemediationConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutRemediationConfigurationsInput,
    PutRemediationConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutRemediationConfigurationsInput,
        PutRemediationConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
