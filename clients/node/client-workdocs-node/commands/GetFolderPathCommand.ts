import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFolderPath } from "../model/operations/GetFolderPath";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFolderPathInput } from "../types/GetFolderPathInput";
import { GetFolderPathOutput } from "../types/GetFolderPathOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/GetFolderPathInput";
export * from "../types/GetFolderPathOutput";
export * from "../types/GetFolderPathExceptionsUnion";

export class GetFolderPathCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFolderPathInput,
      OutputTypesUnion,
      GetFolderPathOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFolderPath;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFolderPathInput,
    GetFolderPathOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFolderPathInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFolderPathInput, GetFolderPathOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFolderPathInput, GetFolderPathOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
