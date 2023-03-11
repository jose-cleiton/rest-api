"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
class Server {
    app;
    PORT;
    constructor() {
        this.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
        this.app = (0, express_1.default)();
    }
    start() {
        this.app.get('/', this.handleRequest);
        this.app.listen(this.PORT, () => {
            console.log(`Server is listening on port t http://localhost:${this.PORT}`);
        });
    }
    handleRequest(req, res) {
        res.json({ message: 'Hello World!' });
    }
}
exports.Server = Server;
const server = new Server();
server.start();
