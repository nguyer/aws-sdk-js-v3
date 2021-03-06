import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApplicationDateRangeKpi } from "../model/operations/GetApplicationDateRangeKpi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApplicationDateRangeKpiInput } from "../types/GetApplicationDateRangeKpiInput";
import { GetApplicationDateRangeKpiOutput } from "../types/GetApplicationDateRangeKpiOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetApplicationDateRangeKpiInput";
export * from "../types/GetApplicationDateRangeKpiOutput";
export * from "../types/GetApplicationDateRangeKpiExceptionsUnion";

export class GetApplicationDateRangeKpiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApplicationDateRangeKpiInput,
      OutputTypesUnion,
      GetApplicationDateRangeKpiOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetApplicationDateRangeKpi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApplicationDateRangeKpiInput,
    GetApplicationDateRangeKpiOutput,
    Blob
  >();

  constructor(readonly input: GetApplicationDateRangeKpiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApplicationDateRangeKpiInput,
    GetApplicationDateRangeKpiOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetApplicationDateRangeKpiInput,
        GetApplicationDateRangeKpiOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
