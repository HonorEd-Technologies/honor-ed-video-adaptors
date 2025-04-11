import { type HonorVideoAdaptor } from './HonorVideoAdaptor'
import { type HonorVideoServiceProvider } from '../types/Shared/HonorVideoServiceProvider'
import { YoutubeAdaptor } from './YouTube/YoutubeAdaptor'

export const HonorVideoAdaptorFactory = {
  createAdaptor: (service: HonorVideoServiceProvider): HonorVideoAdaptor => {
    switch (service.type) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      case 'youtube':
        return new YoutubeAdaptor(service.apiKey)
    }
  },
}
