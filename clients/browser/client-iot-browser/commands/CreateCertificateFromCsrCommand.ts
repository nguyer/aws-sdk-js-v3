import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateCertificateFromCsr } from "../model/operations/CreateCertificateFromCsr";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCertificateFromCsrInput } from "../types/CreateCertificateFromCsrInput";
import { CreateCertificateFromCsrOutput } from "../types/CreateCertificateFromCsrOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateCertificateFromCsrInput";
export * from "../types/CreateCertificateFromCsrOutput";
export * from "../types/CreateCertificateFromCsrExceptionsUnion";

export class CreateCertificateFromCsrCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCertificateFromCsrInput,
      OutputTypesUnion,
      CreateCertificateFromCsrOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CreateCertificateFromCsr;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCertificateFromCsrInput,
    CreateCertificateFromCsrOutput,
    Blob
  >();

  constructor(readonly input: CreateCertificateFromCsrInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCertificateFromCsrInput,
    CreateCertificateFromCsrOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCertificateFromCsrInput, CreateCertificateFromCsrOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
