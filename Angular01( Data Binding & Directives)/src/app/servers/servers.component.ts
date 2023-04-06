import { Component, NgModule } from '@angular/core';




@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
 
export class ServersComponent {
  
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'no server was created';
  serverName =  "";
  serverCreated: boolean = false;
  servers = ['TestServer', 'TestServer2'];

  constructor(){

    // ----------Property Binding-----
    setTimeout(() => {
      this.allowNewServers = true;
    },2000)
  }

  //-------Event Binding------
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created!! With the name : ' + this.serverName;
  }

  
  onUpdateServerName(event: Event){
    this.serverName= (<HTMLInputElement>event.target).value;
   
  }

}
