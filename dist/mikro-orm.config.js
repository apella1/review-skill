import { MongoDriver } from "@mikro-orm/mongodb";
import { mongoDB } from "./constants.js";
const config = {
    entities: ["./dist/entities"],
    dbName: "skills",
    clientUrl: mongoDB,
    type: "mongo",
    driver: MongoDriver
};
export default config;
