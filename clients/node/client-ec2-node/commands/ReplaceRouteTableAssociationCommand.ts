import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ReplaceRouteTableAssociation } from "../model/operations/ReplaceRouteTableAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReplaceRouteTableAssociationInput } from "../types/ReplaceRouteTableAssociationInput";
import { ReplaceRouteTableAssociationOutput } from "../types/ReplaceRouteTableAssociationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ReplaceRouteTableAssociationInput";
export * from "../types/ReplaceRouteTableAssociationOutput";
export * from "../types/ReplaceRouteTableAssociationExceptionsUnion";

export class ReplaceRouteTableAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReplaceRouteTableAssociationInput,
      OutputTypesUnion,
      ReplaceRouteTableAssociationOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ReplaceRouteTableAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReplaceRouteTableAssociationInput,
    ReplaceRouteTableAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: ReplaceRouteTableAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReplaceRouteTableAssociationInput,
    ReplaceRouteTableAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ReplaceRouteTableAssociationInput,
        ReplaceRouteTableAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
