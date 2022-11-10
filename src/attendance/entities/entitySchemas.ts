import { EntitySchema } from "typeorm";
import { Attendance } from "./attendance.entity";

export const UserSchema =new EntitySchema<Attendance>({
    name:'User',
    target: Attendance,
    columns:{
        email:{
            type: String,
        },
        name:{
            type: String,
        },
        hours:{
            type: Number,
        },
        date:{
            type: Date,
        },
        task:{
            type: String,
        },
    }
})