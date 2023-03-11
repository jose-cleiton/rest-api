import express, { Request, Response } from 'express';


export class Server {
  private app: express.Application;
  private PORT: number;

  constructor() {
    this.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
    this.app = express();
  }

  public start() {
    this.app.get('/', this.handleRequest);
    this.app.listen(this.PORT, () => { 
      console.log(`Server is listening on port t http://localhost:${this.PORT}`);
    });
   }


  private handleRequest(req: Request, res: Response) { 
    res.json({ message: 'Hello World!' });
  }


}
 
const server = new Server();
server.start();