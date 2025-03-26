def menu():
    personas = []
    
    while True:
        print("\n--- Menú ---")
        print("1. Ingresar nueva persona")
        print("2. Mostrar todos los datos")
        print("3. Filtrar por DNI")
        print("4. Salir")
        
        opcion = input("Elige una opción: ")
        
        if opcion == "1":
            nombre = input("Ingresa el nombre: ")
            apellido = input("Ingresa el apellido: ")
            dni = input("Ingresa el DNI: ")
            telefonos = [t.strip() for t in input("Ingresa los teléfonos separados por comas: ").split(",")]
            hijos = [h.strip() for h in input("Ingresa los nombres de los hijos separados por comas: ").split(",") if h.strip() != ""]
            
            personas.append([nombre, apellido, dni, telefonos, hijos])
            print("Persona agregada con éxito!")
        
        elif opcion == "2":
            print("\nDatos ingresados:")
            print(personas)
            for p in personas:
                print(f"{p[0]} {p[1]} - DNI: {p[2]}, Teléfonos: {len(p[3])}, Hijos: {len(p[4])}")
        
        elif opcion == "3":
            dni_filtrar = input("Ingresa el DNI para filtrar: ")
            encontrada = None
            
            for p in personas:
                if p[2] == dni_filtrar:
                    encontrada = p
                    break
            
            if encontrada:
                print(f"\nDatos de {encontrada[0]} {encontrada[1]}:")
                print(f"DNI: {encontrada[2]}")
                print(f"Teléfonos: {len(encontrada[3])} teléfono(s)")
                print(f"Hijos: {len(encontrada[4])}")
            else:
                print("No se encontró una persona con ese DNI.")
        
        elif opcion == "4":
            print("Saliendo...")
            break
        
        else:
            print("Opción no válida, intenta de nuevo.")

if __name__ == "__main__":
    menu()
