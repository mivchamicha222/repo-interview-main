import { createExpressServer } from "routing-controllers";
import cors from 'cors'; // Importa cors
import 'dotenv/config';

let PORT = 3002;

// Crea la aplicación Express y registra todas las rutas del controlador
const app = createExpressServer({
  cors: true, // Habilita CORS directamente aquí
  routePrefix: "/bp", 
  controllers: [
    __dirname + "/controllers/*{.js,.ts}",
  ],
});

// Ejecuta la aplicación Express en el puerto 3002
app.listen(PORT, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${PORT}`);
  console.log(`Fecha/Hora: ${new Date().toLocaleString()}`);
});