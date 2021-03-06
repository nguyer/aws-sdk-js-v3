import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBackupInput: _Structure_ = {
  type: "structure",
  required: ["BackupArn"],
  members: {
    BackupArn: {
      shape: {
        type: "string",
        min: 37
      }
    }
  }
};
