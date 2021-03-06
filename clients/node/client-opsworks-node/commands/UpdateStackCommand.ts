import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateStack } from "../model/operations/UpdateStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStackInput } from "../types/UpdateStackInput";
import { UpdateStackOutput } from "../types/UpdateStackOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/UpdateStackInput";
export * from "../types/UpdateStackOutput";
export * from "../types/UpdateStackExceptionsUnion";

export class UpdateStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStackInput,
      OutputTypesUnion,
      UpdateStackOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStackInput,
    UpdateStackOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateStackInput, UpdateStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateStackInput, UpdateStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
