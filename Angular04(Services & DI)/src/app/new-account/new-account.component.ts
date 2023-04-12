import { Component } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // To let angular now that this is the service we want to inject.
  // Can be provided in module file so that it can be injected in all the child components

  // providers: [LoggingService]
})
export class NewAccountComponent {
  //Creating a var of type logging service
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

  //Created instance of Service class (not preferred for production)
  // const service = new LoggingService();
  // service.logStatusChange(accountStatus);
}
