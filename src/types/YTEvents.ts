export const enum YTEventType { 
  playerReady,
  stateChanged,
  error,
  currentTimeChanged
}

export type YTEvent = { 
  data?: any
}

export const enum YTPlayerState { 
  unstarted = -1,
  ended = 0,
  playing = 1,
  paused = 2,
  buffering = 3,
  videoCued = 5
}

export enum YTError { 
  invalidParameter = 2,
  playerError = 5,
  notFound = 100,
  invalidPermissions = 101,
  invalidPermissionsAlt = 150,
  apiLoadError = 400
}

class YTEventEmitter<T> { 
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

export type YTEventListeners = { 
  onReady: (callback: () => void) => void,
  onStateChanged: (callback: (state: YTPlayerState) => void) => void,
  onError: (callback: (error: YTError) => void) => void,
  onCurrentTimeChanged: (callback: (time: number) => void) => void
}

export class YTEventEmitters { 
  private stateChangeEmitter: YTEventEmitter<YTPlayerState> = new YTEventEmitter()
  private readyEmitter: YTEventEmitter<void> = new YTEventEmitter()
  private errorEmitter: YTEventEmitter<YTError> = new YTEventEmitter()
  private currentTimeEmitter: YTEventEmitter<number> = new YTEventEmitter()

  onReady = (callback: () => void) => {
    this.readyEmitter.on(callback)
  }

  onStateChange = (callback: (data: YTPlayerState) => void) => { 
    this.stateChangeEmitter.on(callback)
  }

  onError = (callback: (error: YTError) => void) => { 
    this.errorEmitter.on(callback)
  }

  onCurrentTimeChange = (callback: (time: number) => void) => { 
    this.currentTimeEmitter.on(callback)
  }

  triggerEvent = (event: YTEventType, { data }: YTEvent = { }) => { 
    switch (event) { 
      case YTEventType.playerReady:
        this.readyEmitter.emit()
        break
      case YTEventType.stateChanged:
        if (<YTPlayerState>data) { 
          this.stateChangeEmitter.emit(<YTPlayerState>data)
        }
        break
      case YTEventType.error:
        if (<YTError>data) { 
          this.errorEmitter.emit(<YTError>data)
        }
        break
      case YTEventType.currentTimeChanged:
        if (<number>data) { 
          this.currentTimeEmitter.emit(<number>data)
        }
    }
  }
}

export type YTEventHandler = (event: YTEventType, payload: YTEvent) => void