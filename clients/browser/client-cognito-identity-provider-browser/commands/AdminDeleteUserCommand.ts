import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminDeleteUser } from "../model/operations/AdminDeleteUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminDeleteUserInput } from "../types/AdminDeleteUserInput";
import { AdminDeleteUserOutput } from "../types/AdminDeleteUserOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminDeleteUserInput";
export * from "../types/AdminDeleteUserOutput";
export * from "../types/AdminDeleteUserExceptionsUnion";

export class AdminDeleteUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminDeleteUserInput,
      OutputTypesUnion,
      AdminDeleteUserOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminDeleteUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminDeleteUserInput,
    AdminDeleteUserOutput,
    Blob
  >();

  constructor(readonly input: AdminDeleteUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<AdminDeleteUserInput, AdminDeleteUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminDeleteUserInput,
        AdminDeleteUserOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminDeleteUserInput, AdminDeleteUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
