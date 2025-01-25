import { HonorVideoError } from "./HonorVideoError"
import { HonorVideoEvent, HonorVideoEventPayload } from "./HonorVideoEvent"
import { HonorVideoPlayerState } from "./HonorVideoPlayerState"

class HonorVideoEventEmitter<T> { 
  private callbacks: ((data: T) => void)[] = []
  
  on(callback: (data: T) => void) { 
    this.callbacks.push(callback)
  }

  off(callback: (data: T) => void) { 
    let index = this.callbacks.indexOf(callback)
    if (index > -1) { 
      this.callbacks.splice(index, 1)
    }
  }

  emit(data: T) { 
    for (const callback of this.callbacks) { 
      callback(data)
    }
  }
}

export class HonorVideoEventEmitters { 
  private stateChangeEmitter: HonorVideoEventEmitter<HonorVideoPlayerState> = new HonorVideoEventEmitter()
  private readyEmitter: HonorVideoEventEmitter<void> = new HonorVideoEventEmitter()
  private errorEmitter: HonorVideoEventEmitter<HonorVideoError> = new HonorVideoEventEmitter()
  private currentTimeEmitter: HonorVideoEventEmitter<number> = new HonorVideoEventEmitter()

  onReady = (callback: () => void) => {
    this.readyEmitter.on(callback)
  }

  onStateChange = (callback: (data: HonorVideoPlayerState) => void) => { 
    this.stateChangeEmitter.on(callback)
  }

  onError = (callback: (error: HonorVideoError) => void) => { 
    this.errorEmitter.on(callback)
  }

  onCurrentTimeChange = (callback: (time: number) => void) => { 
    this.currentTimeEmitter.on(callback)
  }

  triggerEvent = (event: HonorVideoEvent, { data }: HonorVideoEventPayload = { }) => { 
    switch (event) { 
      case HonorVideoEvent.playerReady:
        this.readyEmitter.emit()
        break
      case HonorVideoEvent.stateChanged:
        if (<HonorVideoPlayerState>data) { 
          this.stateChangeEmitter.emit(<HonorVideoPlayerState>data)
        }
        break
      case HonorVideoEvent.error:
        if (<HonorVideoError>data) { 
          this.errorEmitter.emit(<HonorVideoError>data)
        }
        break
      case HonorVideoEvent.currentTimeChanged:
        if (<number>data) { 
          this.currentTimeEmitter.emit(<number>data)
        }
    }
  }
}

export type HonorVideoEventHandler = (event: HonorVideoEvent, payload: HonorVideoEventPayload) => void