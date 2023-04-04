import { Options } from "@mikro-orm/core"
import { MongoDriver } from "@mikro-orm/mongodb";
import { mongoDB } from "./constants.js";

// options to make it type safe
const config: Options = {
    entities: ["./dist/entities"],
    dbName: "skills",
    clientUrl: mongoDB,
    type: "mongo",
    driver: MongoDriver
}

export default config;