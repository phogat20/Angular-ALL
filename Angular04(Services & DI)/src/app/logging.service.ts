// - Service class created 
// - Service is a class that provides functionality that can be shared across multiple components, directives, or other services in an application.
// - Services are typically used to implement business logic, data access, or communication with external APIs.

export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
