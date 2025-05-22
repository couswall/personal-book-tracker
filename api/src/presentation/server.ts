import express from "express";
import { Server as HttpServer } from 'http';

interface ServerOptions{
    port: number;
    publicPath: string;
}

export class Server{
    public readonly app = express();
    private readonly port: number;
    private serverListener?: HttpServer;
    private readonly publicPath: string;

    constructor(options: ServerOptions){
        const {port, publicPath} = options;
        
        this.port = port;
        this.publicPath = publicPath;
    };

    async start(){
        
        this.app.use(express.static(this.publicPath));

        this.serverListener = this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
        });
    }


}