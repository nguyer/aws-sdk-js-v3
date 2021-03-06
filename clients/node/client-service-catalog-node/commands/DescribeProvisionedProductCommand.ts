import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeProvisionedProduct } from "../model/operations/DescribeProvisionedProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProvisionedProductInput } from "../types/DescribeProvisionedProductInput";
import { DescribeProvisionedProductOutput } from "../types/DescribeProvisionedProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProvisionedProductInput";
export * from "../types/DescribeProvisionedProductOutput";
export * from "../types/DescribeProvisionedProductExceptionsUnion";

export class DescribeProvisionedProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProvisionedProductInput,
      OutputTypesUnion,
      DescribeProvisionedProductOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeProvisionedProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProvisionedProductInput,
    DescribeProvisionedProductOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeProvisionedProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProvisionedProductInput,
    DescribeProvisionedProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeProvisionedProductInput,
        DescribeProvisionedProductOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
