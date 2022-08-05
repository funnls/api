import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  MessageBody,
  OnGatewayInit,
} from '@nestjs/websockets';
// import { Server } from 'ws';
import { Server } from 'socket.io';

@WebSocketGateway({
  path: '/',
  cors: {
    origin: '*',
  },
})
export default class FetchGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(FetchGateway.name);

  @WebSocketServer()
  private server: Server;

  public afterInit(server: Server) {
    server.emit('users', 'disconnected');
    this.logger.log('Websocket server started');
  }

  handleConnection() {
    // A client has connected
    this.logger.log('A client has connected');

    // Notify connected clients of current users
    this.server.emit('users', 'connected');
  }

  handleDisconnect() {
    // A client has disconnected
    this.logger.log('A client has disconnected');

    // Notify connected clients of current users
    this.server.emit('users', 'disconnected');
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody('test') test: any) {
    this.server.emit('events', { test });
    this.logger.log({ test });
  }

  @SubscribeMessage('identity')
  handleIdentity(@MessageBody('id') id: number) {
    this.server.emit('identity', id);
  }
}
