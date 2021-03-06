import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLoadBalancerTlsCertificate } from "../model/operations/DeleteLoadBalancerTlsCertificate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLoadBalancerTlsCertificateInput } from "../types/DeleteLoadBalancerTlsCertificateInput";
import { DeleteLoadBalancerTlsCertificateOutput } from "../types/DeleteLoadBalancerTlsCertificateOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteLoadBalancerTlsCertificateInput";
export * from "../types/DeleteLoadBalancerTlsCertificateOutput";
export * from "../types/DeleteLoadBalancerTlsCertificateExceptionsUnion";

export class DeleteLoadBalancerTlsCertificateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLoadBalancerTlsCertificateInput,
      OutputTypesUnion,
      DeleteLoadBalancerTlsCertificateOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLoadBalancerTlsCertificate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLoadBalancerTlsCertificateInput,
    DeleteLoadBalancerTlsCertificateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLoadBalancerTlsCertificateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLoadBalancerTlsCertificateInput,
    DeleteLoadBalancerTlsCertificateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteLoadBalancerTlsCertificateInput,
        DeleteLoadBalancerTlsCertificateOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
