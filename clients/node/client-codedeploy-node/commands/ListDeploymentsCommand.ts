import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDeployments } from "../model/operations/ListDeployments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeploymentsInput } from "../types/ListDeploymentsInput";
import { ListDeploymentsOutput } from "../types/ListDeploymentsOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/ListDeploymentsInput";
export * from "../types/ListDeploymentsOutput";
export * from "../types/ListDeploymentsExceptionsUnion";

export class ListDeploymentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeploymentsInput,
      OutputTypesUnion,
      ListDeploymentsOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDeployments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeploymentsInput,
    ListDeploymentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDeploymentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDeploymentsInput, ListDeploymentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDeploymentsInput, ListDeploymentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
