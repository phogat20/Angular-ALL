import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  //JS object with a lot of metadata about the currently loaded route.
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params.subscribe((parms: Params) => {
      this.user.id = parms['id'];
      this.user.name = parms['name'];
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
// subscribe() is a method that is used to subscribe to an observable. An observable is an asynchronous stream of data that can emit values over time.
// The subscribe() method takes one or more callback functions as arguments, which will be called when new values are emitted by the observable.
