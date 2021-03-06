import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeMaintenanceWindowExecutionTaskInvocations } from "../model/operations/DescribeMaintenanceWindowExecutionTaskInvocations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMaintenanceWindowExecutionTaskInvocationsInput } from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsInput";
import { DescribeMaintenanceWindowExecutionTaskInvocationsOutput } from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsInput";
export * from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsOutput";
export * from "../types/DescribeMaintenanceWindowExecutionTaskInvocationsExceptionsUnion";

export class DescribeMaintenanceWindowExecutionTaskInvocationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMaintenanceWindowExecutionTaskInvocationsInput,
      OutputTypesUnion,
      DescribeMaintenanceWindowExecutionTaskInvocationsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeMaintenanceWindowExecutionTaskInvocations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMaintenanceWindowExecutionTaskInvocationsInput,
    DescribeMaintenanceWindowExecutionTaskInvocationsOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: DescribeMaintenanceWindowExecutionTaskInvocationsInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMaintenanceWindowExecutionTaskInvocationsInput,
    DescribeMaintenanceWindowExecutionTaskInvocationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeMaintenanceWindowExecutionTaskInvocationsInput,
        DescribeMaintenanceWindowExecutionTaskInvocationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
