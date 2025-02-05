import { HonorVideoAdaptor } from "./HonorVideoAdaptor";
import { HonorVideoServiceProvider } from "../types/Shared/HonorVideoServiceProvider";
import { YoutubeAdaptor } from "./YouTube/YoutubeAdaptor";

export const HonorVideoAdaptorFactory = { 
  createAdaptor: (service: HonorVideoServiceProvider): HonorVideoAdaptor => { 
    switch (service) { 
      case 'youtube':
        return new YoutubeAdaptor()
    }
  }
}