import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

// This service in injectable
// @Injectable() is a decorator function in Angular that is used to define a class as a provider for the dependency injection system. When a class is marked with the @Injectable() decorator, Angular knows that it may be used as a dependency by other components, directives, or services.
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
