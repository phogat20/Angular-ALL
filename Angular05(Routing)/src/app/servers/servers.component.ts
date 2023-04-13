import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  // ActivatedRoute is a service that provides information about the currently activated route.
  constructor(private serversService: ServersService
    ,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReaload(){
    // this.router.navigate(['servers'],{relativeTo:this.route});
  }
}


// ActivatedRoute
// snapshot: A property that provides access to the current state of the route, including its parameters, data, and URL segments.

// paramMap: A property that provides access to the parameters of the current route as an Observable.

// queryParamMap: A property that provides access to the query parameters of the current route as an Observable.

// data: A property that provides access to any additional data associated with the current route.