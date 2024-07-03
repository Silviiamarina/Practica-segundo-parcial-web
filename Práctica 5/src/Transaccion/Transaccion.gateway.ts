import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { TransaccionService } from './Transaccion.service';
import { Server, Socket } from 'socket.io';
import { CreateTransaccionInput } from './dto/Transaccion.dto.';

@WebSocketGateway({ cors: true })
export class TransaccionGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly TransaccionService: TransaccionService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.TransaccionService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.TransaccionService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.TransaccionService.removeClient(client.id);
    this.wss.emit('clients-updated', this.TransaccionService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  async onMessageFromClient(client: Socket, payload: CreateTransaccionInput): Promise<void> {
    const registro = await this.TransaccionService.create(payload);
    this.wss.emit('message-from-server', {
      fullName: this.TransaccionService.getUserfullName(client.id),
      message: registro,
    });
  }
}
