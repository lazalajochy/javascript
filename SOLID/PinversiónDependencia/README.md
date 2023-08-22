# Principio de Inversión de Dependencia


El quinto principio SOLID es el "Principio de Inversión de Dependencia" (Dependency Inversion Principle, DIP). Este principio se enfoca en la reducción del acoplamiento entre componentes de software y promueve la reutilización y la facilidad de cambio.

El DIP consta de dos partes:

Dependencias de alto nivel: Los módulos de alto nivel (como clases que contienen la lógica principal) no deben depender directamente de módulos de bajo nivel (como clases que realizan tareas específicas). Ambos deben depender de abstracciones.

Abstracciones: Las abstracciones no deben depender de los detalles. Tanto los módulos de alto nivel como los de bajo nivel deben depender de abstracciones.

En resumen, el DIP busca invertir la dirección de las dependencias, de modo que los componentes de alto nivel dependan de abstracciones y los detalles dependan de estas abstracciones.

# Ejemplo mal implementado (violación del DIP):

Supongamos que tienes una clase NotificationService que envía notificaciones por correo electrónico:

```
class EmailService {
  sendEmail(message, recipient) {
    // Código para enviar un correo electrónico
  }
}

class NotificationService {
  constructor() {
    this.emailService = new EmailService();
  }

  sendNotification(message, recipient) {
    this.emailService.sendEmail(message, recipient);
  }
}

```

En este ejemplo, la clase NotificationService depende directamente de EmailService, lo que crea un alto acoplamiento. Si deseas cambiar la forma en que se envían las notificaciones (por ejemplo, usando SMS o notificaciones push), tendrías que modificar la clase NotificationService, lo que va en contra del principio de inversión de dependencia.

# Ejemplo bien implementado (siguiendo el DIP):

Para seguir el DIP, las dependencias deben invertirse y las abstracciones deben introducirse para reducir el acoplamiento. Esto se puede lograr mediante el uso de interfaces o clases base abstractas.

```
class NotificationSender {
  sendNotification(message, recipient) {}
}

class EmailService extends NotificationSender {
  sendNotification(message, recipient) {
    // Código para enviar un correo electrónico
  }
}

class SMSNotificationService extends NotificationSender {
  sendNotification(message, recipient) {
    // Código para enviar una notificación por SMS
  }
}

class NotificationService {
  constructor(notificationSender) {
    this.notificationSender = notificationSender;
  }

  sendNotification(message, recipient) {
    this.notificationSender.sendNotification(message, recipient);
  }
}

```
En este ejemplo, la clase NotificationService depende de la abstracción NotificationSender, que puede ser implementada por diferentes servicios de notificación, como EmailService y SMSNotificationService. Esto permite cambiar la forma en que se envían las notificaciones sin modificar NotificationService, siguiendo el principio de inversión de dependencia.

Al seguir el DIP, se logra un diseño más flexible y modular, lo que facilita la reutilización y el mantenimiento del código.

