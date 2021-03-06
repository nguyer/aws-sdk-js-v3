import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDeployablePatchSnapshotForInstance } from "../model/operations/GetDeployablePatchSnapshotForInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeployablePatchSnapshotForInstanceInput } from "../types/GetDeployablePatchSnapshotForInstanceInput";
import { GetDeployablePatchSnapshotForInstanceOutput } from "../types/GetDeployablePatchSnapshotForInstanceOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetDeployablePatchSnapshotForInstanceInput";
export * from "../types/GetDeployablePatchSnapshotForInstanceOutput";
export * from "../types/GetDeployablePatchSnapshotForInstanceExceptionsUnion";

export class GetDeployablePatchSnapshotForInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeployablePatchSnapshotForInstanceInput,
      OutputTypesUnion,
      GetDeployablePatchSnapshotForInstanceOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDeployablePatchSnapshotForInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeployablePatchSnapshotForInstanceInput,
    GetDeployablePatchSnapshotForInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDeployablePatchSnapshotForInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeployablePatchSnapshotForInstanceInput,
    GetDeployablePatchSnapshotForInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDeployablePatchSnapshotForInstanceInput,
        GetDeployablePatchSnapshotForInstanceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
