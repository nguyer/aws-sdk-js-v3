import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEnvironments } from "../model/operations/DescribeEnvironments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEnvironmentsInput } from "../types/DescribeEnvironmentsInput";
import { DescribeEnvironmentsOutput } from "../types/DescribeEnvironmentsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribeEnvironmentsInput";
export * from "../types/DescribeEnvironmentsOutput";
export * from "../types/DescribeEnvironmentsExceptionsUnion";

export class DescribeEnvironmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEnvironmentsInput,
      OutputTypesUnion,
      DescribeEnvironmentsOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEnvironments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEnvironmentsInput,
    DescribeEnvironmentsOutput,
    Blob
  >();

  constructor(readonly input: DescribeEnvironmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEnvironmentsInput,
    DescribeEnvironmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEnvironmentsInput, DescribeEnvironmentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
