import { _Reservation } from "./_Reservation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateReservationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Reservation: {
      shape: _Reservation,
      locationName: "reservation"
    }
  }
};
