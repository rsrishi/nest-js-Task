import { EntitySchema } from "typeorm";
import { Leave } from "./leave.entity";

export const UserSchema =new EntitySchema<Leave>({
    name:'User',
    target: Leave,
    columns:{
        // id:{
        //     type:Number,
        //     primary:true,
        //     generated:true,
        // },
        email:{
            type: String,
        },
        name:{
            type: String,
        },
        todate:{
            type: Date,
        },
        fromdate:{
            type: Date,
        },
    }
})