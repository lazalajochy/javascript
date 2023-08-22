# Principio de Responsabilidad Única


El Principio de Responsabilidad Única (SRP, por sus siglas en inglés) es uno de los principios SOLID de diseño de software. Básicamente, establece que una clase o función debe tener una única responsabilidad y motivo para cambiar. En otras palabras, una clase o función debe hacer una cosa y hacerla bien.


# Ejemplo

Un ejemplo sencillo en JavaScript podría ser un programa que maneja tanto la lectura de un archivo como la impresión de su contenido. Sin embargo, este ejemplo no sigue el principio de responsabilidad única. Aquí tienes una implementación incorrecta:

```
class FileManager {
  constructor(fileName) {
    this.fileName = fileName;
  }

  readFromFile() {
    // código para leer el archivo
  }

  printContent() {
    // código para imprimir el contenido del archivo
  }
}

const fileManager = new FileManager("documento.txt");
fileManager.readFromFile();
fileManager.printContent();
```

En este ejemplo, la clase FileManager tiene dos responsabilidades: leer desde un archivo y manejar la impresión. Esto viola el principio de responsabilidad única.

Una implementación que sigue el principio de responsabilidad única sería dividir estas responsabilidades en clases separadas. Aquí tienes un ejemplo corregido:


```
class FileReader {
  constructor(fileName) {
    this.fileName = fileName;
  }

  readFromFile() {
    // código para leer el archivo
  }
}

class Printer {
  constructor(content) {
    this.content = content;
  }

  printContent() {
    // código para imprimir el contenido
  }
}

const fileReader = new FileReader("documento.txt");
const fileContent = fileReader.readFromFile();

const printer = new Printer(fileContent);
printer.printContent();
```
En esta versión corregida, tenemos dos clases separadas: FileReader para manejar la lectura de archivos y Printer para manejar la impresión. Cada clase tiene una única responsabilidad y motivo para cambiar, lo que sigue el principio de responsabilidad única.
