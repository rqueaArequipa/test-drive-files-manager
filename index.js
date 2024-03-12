import app from "./src/app.js";
import { PORT_SERVER } from "./src/config/env.config.js";

async function main() {
  //await connectToDB()
  app.listen(PORT_SERVER);
  console.log(`Servidor escuchando en http://localhost:${PORT_SERVER}`);
}

main();
