import { YoutubeAdaptor } from './YouTube/YoutubeAdaptor';
export const HonorVideoAdaptorFactory = {
    createAdaptor: (service) => {
        switch (service) {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            case 'youtube':
                return new YoutubeAdaptor();
        }
    },
};
//# sourceMappingURL=HonorVideoAdaptorFactory.js.map