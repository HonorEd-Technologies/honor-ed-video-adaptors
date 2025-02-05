"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HonorVideoAdaptorFactory = void 0;
const YoutubeAdaptor_1 = require("./YouTube/YoutubeAdaptor");
exports.HonorVideoAdaptorFactory = {
    createAdaptor: (service) => {
        switch (service) {
            case 'youtube':
                return new YoutubeAdaptor_1.YoutubeAdaptor();
        }
    }
};
//# sourceMappingURL=HonorVideoAdaptorFactory.js.map