import { YoutubeAdaptor } from './YouTube/YoutubeAdaptor';
export const HonorVideoAdaptorFactory = {
    createAdaptor: (service) => {
        switch (service) {
            case 'youtube':
                return new YoutubeAdaptor();
        }
    },
};
//# sourceMappingURL=HonorVideoAdaptorFactory.js.map