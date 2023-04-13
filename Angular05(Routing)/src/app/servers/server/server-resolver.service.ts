import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params['id']);
  }
}
//Resolver is a service that is used to fetch data before a route is activated. The data fetched by the resolver is then available to the component associated with the route.
// - The purpose of a resolver is to ensure that the component has all the necessary data before it is rendered, which can improve the performance and user experience of an application.
// - This is particularly useful when the data is required for rendering the component or for performing some action within the component.