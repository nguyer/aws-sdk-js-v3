import { GetSearchSuggestionsInput } from "../shapes/GetSearchSuggestionsInput";
import { GetSearchSuggestionsOutput } from "../shapes/GetSearchSuggestionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSearchSuggestions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSearchSuggestions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetSearchSuggestionsInput
  },
  output: {
    shape: GetSearchSuggestionsOutput
  },
  errors: []
};
