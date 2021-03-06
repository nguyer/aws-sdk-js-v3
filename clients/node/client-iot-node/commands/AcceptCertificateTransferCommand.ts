import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AcceptCertificateTransfer } from "../model/operations/AcceptCertificateTransfer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptCertificateTransferInput } from "../types/AcceptCertificateTransferInput";
import { AcceptCertificateTransferOutput } from "../types/AcceptCertificateTransferOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/AcceptCertificateTransferInput";
export * from "../types/AcceptCertificateTransferOutput";
export * from "../types/AcceptCertificateTransferExceptionsUnion";

export class AcceptCertificateTransferCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptCertificateTransferInput,
      OutputTypesUnion,
      AcceptCertificateTransferOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AcceptCertificateTransfer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptCertificateTransferInput,
    AcceptCertificateTransferOutput,
    _stream.Readable
  >();

  constructor(readonly input: AcceptCertificateTransferInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptCertificateTransferInput,
    AcceptCertificateTransferOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcceptCertificateTransferInput, AcceptCertificateTransferOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
