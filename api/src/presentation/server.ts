import { Server as HttpServer } from 'http';

interface ServerOptions{
    port: number;
}

export class Server{
    private readonly port: number;
    private serverListener?: HttpServer;

    constructor(options: ServerOptions){
        const {port} = options;
        
        this.port = port;
    };

    async start(){
        console.log(`Server running in port ${this.port}`);
    }


}