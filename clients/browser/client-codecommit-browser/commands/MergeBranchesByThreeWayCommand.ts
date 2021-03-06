import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { MergeBranchesByThreeWay } from "../model/operations/MergeBranchesByThreeWay";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergeBranchesByThreeWayInput } from "../types/MergeBranchesByThreeWayInput";
import { MergeBranchesByThreeWayOutput } from "../types/MergeBranchesByThreeWayOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/MergeBranchesByThreeWayInput";
export * from "../types/MergeBranchesByThreeWayOutput";
export * from "../types/MergeBranchesByThreeWayExceptionsUnion";

export class MergeBranchesByThreeWayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergeBranchesByThreeWayInput,
      OutputTypesUnion,
      MergeBranchesByThreeWayOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = MergeBranchesByThreeWay;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergeBranchesByThreeWayInput,
    MergeBranchesByThreeWayOutput,
    Blob
  >();

  constructor(readonly input: MergeBranchesByThreeWayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    MergeBranchesByThreeWayInput,
    MergeBranchesByThreeWayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MergeBranchesByThreeWayInput, MergeBranchesByThreeWayOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
