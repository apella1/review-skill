import express from "express";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import { port } from "./constants";
import config from "./mikro-orm.config";

const orm = await MikroORM.init(config);

const app = express();

// forking Entity Manager for each request so their identity maps will not collide
app.use((_req, _res, next) => {
  RequestContext.create(orm.em, next);
});

app.get("/", (_req, res, _next) => {
  res.send("Review Skill is live");
});

app.listen(port, () => {
  console.log(`Server running on port 5000`);
});

console.log(orm.em);
