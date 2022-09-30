import { createConnection } from "typeorm";
import { Bootstrap } from "./bootstrap";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    await Bootstrap().catch((err) => {
      console.log(err);
    });
  })
  .catch((error) => console.log(error));

