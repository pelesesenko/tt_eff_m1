import express from 'express';
import router from './router.js';

const Port = process.env.PORT;

const server = express();

server.use(express.json());
server.use(router);

server.listen(Port, () => {
  console.log('Server started at port ' + Port);
});
