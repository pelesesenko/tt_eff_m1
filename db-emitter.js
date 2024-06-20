import { EventEmitter } from 'node:events';

class DbEmitter extends EventEmitter {}

export default new DbEmitter();
