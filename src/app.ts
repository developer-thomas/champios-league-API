// A responsabilidade do app é apenas ler as configurações do projeto
import express, { json } from "express";
import { router } from "./routes";
import cors from "cors";

export function createApp() {
  const app = express();
  // middleware para o header application: json
  app.use(json());

  // Esse é o prefixo padrão, as rotas contidas no router. Ex: /api/players
  app.use("/api", router);

  // const corsOptions = {
  //   origin: ["http://usina-rr.netlify.app"],
  //   methoods: ["GET", "POST", "PATCH"],
  // };

  app.use(cors());
  return app;
}
