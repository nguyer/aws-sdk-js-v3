import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVpcPeeringConnection } from "../model/operations/DeleteVpcPeeringConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcPeeringConnectionInput } from "../types/DeleteVpcPeeringConnectionInput";
import { DeleteVpcPeeringConnectionOutput } from "../types/DeleteVpcPeeringConnectionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpcPeeringConnectionInput";
export * from "../types/DeleteVpcPeeringConnectionOutput";
export * from "../types/DeleteVpcPeeringConnectionExceptionsUnion";

export class DeleteVpcPeeringConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcPeeringConnectionInput,
      OutputTypesUnion,
      DeleteVpcPeeringConnectionOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVpcPeeringConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcPeeringConnectionInput,
    DeleteVpcPeeringConnectionOutput,
    Blob
  >();

  constructor(readonly input: DeleteVpcPeeringConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpcPeeringConnectionInput,
    DeleteVpcPeeringConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVpcPeeringConnectionInput,
        DeleteVpcPeeringConnectionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
