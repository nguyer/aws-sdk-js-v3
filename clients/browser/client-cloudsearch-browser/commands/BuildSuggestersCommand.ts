import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BuildSuggesters } from "../model/operations/BuildSuggesters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BuildSuggestersInput } from "../types/BuildSuggestersInput";
import { BuildSuggestersOutput } from "../types/BuildSuggestersOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/BuildSuggestersInput";
export * from "../types/BuildSuggestersOutput";
export * from "../types/BuildSuggestersExceptionsUnion";

export class BuildSuggestersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BuildSuggestersInput,
      OutputTypesUnion,
      BuildSuggestersOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = BuildSuggesters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BuildSuggestersInput,
    BuildSuggestersOutput,
    Blob
  >();

  constructor(readonly input: BuildSuggestersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<BuildSuggestersInput, BuildSuggestersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BuildSuggestersInput, BuildSuggestersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
