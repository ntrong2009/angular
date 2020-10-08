import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AppInitService {

    public config = {
        token: '',
    };

    constructor(public auth: AuthService) {}

    Init() {
        return new Promise<void>((resolve, reject) => {
            this.auth.getToken().then(token => {
                this.config.token = token as string;
                resolve();
            });
        });
    }

    getConfig(key: string){
        return this.config[key];
    }
}
