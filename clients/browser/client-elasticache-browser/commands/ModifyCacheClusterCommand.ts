import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyCacheCluster } from "../model/operations/ModifyCacheCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyCacheClusterInput } from "../types/ModifyCacheClusterInput";
import { ModifyCacheClusterOutput } from "../types/ModifyCacheClusterOutput";
import { ElastiCacheResolvedConfiguration } from "../ElastiCacheConfiguration";
export * from "../types/ModifyCacheClusterInput";
export * from "../types/ModifyCacheClusterOutput";
export * from "../types/ModifyCacheClusterExceptionsUnion";

export class ModifyCacheClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyCacheClusterInput,
      OutputTypesUnion,
      ModifyCacheClusterOutput,
      ElastiCacheResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyCacheCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyCacheClusterInput,
    ModifyCacheClusterOutput,
    Blob
  >();

  constructor(readonly input: ModifyCacheClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElastiCacheResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyCacheClusterInput,
    ModifyCacheClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyCacheClusterInput, ModifyCacheClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
