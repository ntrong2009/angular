import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Injectable, EventEmitter } from '@angular/core';
import { Message } from 'src/model/message';

@Injectable()
export class ChatService{
    messageReceived = new EventEmitter<Message>();
    connectionEstablished = new EventEmitter<boolean>();

    private connectionIsEstablished = false;
    private _hubConnection: HubConnection;

    constructor(){
        this.createConnection();
    }

    private createConnection(){
        this._hubConnection = new HubConnectionBuilder()
        .withUrl('https://frontend.sportpartner-staging.test.infodation.vn/ws/grouphub')
        .build();
    }

    private registerOnServerEvents(): void{
        this._hubConnection.on('MessageReceived', (data: any) => {
            console.log(data);
            this.messageReceived.emit(data);
        })
    }
}