import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CheckDNSAvailability } from "../model/operations/CheckDNSAvailability";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CheckDNSAvailabilityInput } from "../types/CheckDNSAvailabilityInput";
import { CheckDNSAvailabilityOutput } from "../types/CheckDNSAvailabilityOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/CheckDNSAvailabilityInput";
export * from "../types/CheckDNSAvailabilityOutput";
export * from "../types/CheckDNSAvailabilityExceptionsUnion";

export class CheckDNSAvailabilityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CheckDNSAvailabilityInput,
      OutputTypesUnion,
      CheckDNSAvailabilityOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CheckDNSAvailability;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CheckDNSAvailabilityInput,
    CheckDNSAvailabilityOutput,
    _stream.Readable
  >();

  constructor(readonly input: CheckDNSAvailabilityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CheckDNSAvailabilityInput,
    CheckDNSAvailabilityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CheckDNSAvailabilityInput, CheckDNSAvailabilityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
