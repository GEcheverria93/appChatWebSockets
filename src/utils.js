import { fileURLToPath } from "url";
import { dirname } from "path";
const __filaneme = fileURLToPath(import.meta.url)
const __dirname = dirname(__filaneme);

export default __dirname;

//Lo usamos para configurar las rutas de las vistas y los archivos estaticos 