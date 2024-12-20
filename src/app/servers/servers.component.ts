import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServerComponent } from './server/server.component';
import { Server } from '../shared/models/server.model';

@Component({
  selector: 'app-servers',
  imports: [NgFor, ServerComponent],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];

  ngOnInit(): void {
    this.servers = [
      {
        id: '1',
        name: 'Mail Server',
        isOnline: true,
        description: 'Uses POP3 to receive emails',
      },
      {
        id: '2',
        name: 'Backend Server',
        isOnline: false,
        description: 'Used to store data',
      },
      {
        id: '3',
        name: 'Logging Server',
        isOnline: true,
        description: 'Used to store logs',
      },
      {
        id: '4',
        name: 'Database Server',
        isOnline: false,
        description: 'Used to store data',
      },
      {
        id: '5',
        name: 'Frontend Server',
        isOnline: true,
        description: 'Used to display data',
      },
      {
        id: '6',
        name: 'Dev Server',
        isOnline: false,
        description: 'Used for development',
      },
    ];
  }
}
