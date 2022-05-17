import {
    DataTypes
} from "sequalize"

import connection from "./index.js"

connection.define("users", {
    id: {
        type: DataTypes.INTEGER;
    }
})