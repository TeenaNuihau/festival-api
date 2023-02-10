import mongoose from "mongoose";
import { Benevole } from "src/benevole/schemas/benevole.schema";
import { Zone } from "src/zone/zone.schema";

export class CreateEventDto{
    beginingdate:Date;
    endingdate:Date;
    zone: mongoose.Schema.Types.ObjectId
    benevoles:[ mongoose.Schema.Types.ObjectId]
}

