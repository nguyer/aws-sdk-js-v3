import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateDomain } from "../model/operations/AssociateDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDomainInput } from "../types/AssociateDomainInput";
import { AssociateDomainOutput } from "../types/AssociateDomainOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/AssociateDomainInput";
export * from "../types/AssociateDomainOutput";
export * from "../types/AssociateDomainExceptionsUnion";

export class AssociateDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDomainInput,
      OutputTypesUnion,
      AssociateDomainOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDomainInput,
    AssociateDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateDomainInput, AssociateDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateDomainInput, AssociateDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
