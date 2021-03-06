import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMetricData } from "../model/operations/GetMetricData";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMetricDataInput } from "../types/GetMetricDataInput";
import { GetMetricDataOutput } from "../types/GetMetricDataOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/GetMetricDataInput";
export * from "../types/GetMetricDataOutput";
export * from "../types/GetMetricDataExceptionsUnion";

export class GetMetricDataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMetricDataInput,
      OutputTypesUnion,
      GetMetricDataOutput,
      ConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMetricData;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMetricDataInput,
    GetMetricDataOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMetricDataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMetricDataInput, GetMetricDataOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMetricDataInput, GetMetricDataOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
