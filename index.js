import {
    DataTypes
} from "sequalize"

import connection from "./index.js"

connection.define("users", {
    id: {
        type: DataTypes.INTEGER;
    }
})


get() {
    return this.get
}


ReadableStreamDefaultController.get("/search/by", async {req, res} =>{
    const {location} = req.query

   const data = await userModel.findAll{{
        where:{
            location:{
                [Op.like]: `%${location}%`
            },
        },
    }}
})