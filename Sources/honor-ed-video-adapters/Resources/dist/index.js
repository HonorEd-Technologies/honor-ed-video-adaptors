"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HonorPlayer_1 = __importDefault(require("./HonorPlayer"));
const HonorVideoAdaptorFactory_1 = require("./adaptors/HonorVideoAdaptorFactory");
exports.default = {
    HonorPlayer: HonorPlayer_1.default,
    HonorVideoAdaptorFactory: HonorVideoAdaptorFactory_1.HonorVideoAdaptorFactory,
};
//# sourceMappingURL=index.js.map