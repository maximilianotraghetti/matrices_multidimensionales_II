const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const personas = [];

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function menu() {
  while (true) {
    console.log("\n--- Menú ---");
    console.log("1. Ingresar nueva persona");
    console.log("2. Mostrar todos los datos");
    console.log("3. Filtrar por DNI");
    console.log("4. Salir");
    
    const opcion = await ask("Elige una opción: ");
    
    if (opcion === "1") {
      const nombre = await ask("Ingresa el nombre: ");
      const apellido = await ask("Ingresa el apellido: ");
      const dni = await ask("Ingresa el DNI: ");
      const telefonos = (await ask("Ingresa los teléfonos separados por comas: ")).split(",").map(t => t.trim());
      const hijos = (await ask("Ingresa los nombres de los hijos separados por comas: ")).split(",").map(t => t.trim()).filter(t => t !== "");
      
      personas.push([nombre, apellido, dni, telefonos, hijos]);
      console.log("Persona agregada con éxito!");
      
    } else if (opcion === "2") {
      console.log("\nDatos ingresados:");
      console.log(personas);
      personas.forEach(p => {
        console.log(`${p[0]} ${p[1]} - DNI: ${p[2]}, Teléfonos: ${p[3].length}, Hijos: ${p[4].length}`);
      });
      
    } else if (opcion === "3") {
      const filtrarDNI = await ask("Ingresa el DNI para filtrar: ");
      const persona = personas.find(p => p[2] === filtrarDNI);
      
      if (persona) {
        console.log(`\n${persona[0]} ${persona[1]} - DNI: ${persona[2]}, Teléfonos: ${persona[3].length}, Hijos: ${persona[4].length}`);
      } else {
        console.log("No se encontró una persona con ese DNI.");
      }
      
    } else if (opcion === "4") {
      console.log("Saliendo...");
      rl.close();
      break;
      
    } else {
      console.log("Opción no válida, intenta de nuevo.");
    }
  }
}

menu();
