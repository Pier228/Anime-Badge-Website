import { ObjectId } from "mongoose";

export default interface IDanceFloorCharacter {
    name: string;
    src: string;
    _id: ObjectId;
}
