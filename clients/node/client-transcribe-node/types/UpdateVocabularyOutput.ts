import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateVocabularyOutput shape
 */
export interface UpdateVocabularyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the vocabulary that was updated.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?:
    | "en-US"
    | "es-US"
    | "en-AU"
    | "fr-CA"
    | "en-GB"
    | "de-DE"
    | "pt-BR"
    | "fr-FR"
    | "it-IT"
    | "ko-KR"
    | "es-ES"
    | "en-IN"
    | "hi-IN"
    | "ar-SA"
    | string;

  /**
   * <p>The date and time that the vocabulary was updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The processing state of the vocabulary. When the <code>VocabularyState</code> field contains <code>READY</code> the vocabulary is ready to be used in a <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: "PENDING" | "READY" | "FAILED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
