import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PurchaseReservedInstancesOffering } from "../model/operations/PurchaseReservedInstancesOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseReservedInstancesOfferingInput } from "../types/PurchaseReservedInstancesOfferingInput";
import { PurchaseReservedInstancesOfferingOutput } from "../types/PurchaseReservedInstancesOfferingOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/PurchaseReservedInstancesOfferingInput";
export * from "../types/PurchaseReservedInstancesOfferingOutput";
export * from "../types/PurchaseReservedInstancesOfferingExceptionsUnion";

export class PurchaseReservedInstancesOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseReservedInstancesOfferingInput,
      OutputTypesUnion,
      PurchaseReservedInstancesOfferingOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PurchaseReservedInstancesOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseReservedInstancesOfferingInput,
    PurchaseReservedInstancesOfferingOutput,
    _stream.Readable
  >();

  constructor(readonly input: PurchaseReservedInstancesOfferingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseReservedInstancesOfferingInput,
    PurchaseReservedInstancesOfferingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PurchaseReservedInstancesOfferingInput,
        PurchaseReservedInstancesOfferingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
