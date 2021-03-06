import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeElasticsearchDomains } from "../model/operations/DescribeElasticsearchDomains";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeElasticsearchDomainsInput } from "../types/DescribeElasticsearchDomainsInput";
import { DescribeElasticsearchDomainsOutput } from "../types/DescribeElasticsearchDomainsOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/DescribeElasticsearchDomainsInput";
export * from "../types/DescribeElasticsearchDomainsOutput";
export * from "../types/DescribeElasticsearchDomainsExceptionsUnion";

export class DescribeElasticsearchDomainsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeElasticsearchDomainsInput,
      OutputTypesUnion,
      DescribeElasticsearchDomainsOutput,
      ElasticsearchServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeElasticsearchDomains;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeElasticsearchDomainsInput,
    DescribeElasticsearchDomainsOutput,
    Blob
  >();

  constructor(readonly input: DescribeElasticsearchDomainsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeElasticsearchDomainsInput,
    DescribeElasticsearchDomainsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeElasticsearchDomainsInput,
        DescribeElasticsearchDomainsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
