import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDeployment } from "../model/operations/DeleteDeployment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeploymentInput } from "../types/DeleteDeploymentInput";
import { DeleteDeploymentOutput } from "../types/DeleteDeploymentOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteDeploymentInput";
export * from "../types/DeleteDeploymentOutput";
export * from "../types/DeleteDeploymentExceptionsUnion";

export class DeleteDeploymentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeploymentInput,
      OutputTypesUnion,
      DeleteDeploymentOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDeployment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeploymentInput,
    DeleteDeploymentOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDeploymentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDeploymentInput, DeleteDeploymentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeploymentInput, DeleteDeploymentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
