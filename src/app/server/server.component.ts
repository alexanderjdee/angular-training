import { Component } from '@angular/core';

@Component({
  //Element selector
  selector: 'app-server',

  //Attribute selector
  // selector: '[app-server]',

  //Class selector
  // selector: '.app-server'
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
