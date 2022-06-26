import { useRef } from 'react'
import IonIcon from '@reacticons/ionicons'
import useVideoPlayer from '../hooks/useVideoPlayer'
import VideoSource from '../resources/video/video.mp4'
import VideoPrewiev from '../resources/video/video-preview.jpg'

const VideoPlayer = () => {
  const videoElement = useRef(null)
  const { playerState, togglePlay, handleOnTimeUpdate, handleVideoProgress, toggleMute } = useVideoPlayer(videoElement)

  return (
    <div>
      <div className="relative rounded-xl mt-4 md:mt-9 overflow-hidden">
        <video className="cursor-pointer" src={ VideoSource } ref={ videoElement } poster={ VideoPrewiev } onClick={ togglePlay } onTimeUpdate={ handleOnTimeUpdate } />
        <button className={ `${ playerState.isPlaying ? 'opacity-0' : 'opacity-100' } absolute flex bg-neutral-200/50 backdrop-blur-sm drop-shadow-lg rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 md:p-9 transition-opacity` } onClick={ togglePlay }>
          <IonIcon className="text-indigo-600" name="play" />
        </button>
        <div className={ `${ !playerState.isPlaying ? 'opacity-0' : 'opacity-100' } absolute flex justify-between items-center gap-3 bg-neutral-200/50 backdrop-blur-sm drop-shadow-lg w-full bottom-0 px-3 py-1 transition-opacity` }>
          <input className="flex-1" type="range" min="0" max="100" value={ playerState.progress } disabled={ !playerState.isPlaying } onChange={ e => handleVideoProgress(e) } />
          <button className="flex p-3" onClick={ toggleMute } disabled={ !playerState.isPlaying }>
            { playerState.isMuted ? (
              <IonIcon className="text-indigo-600 text-xl" name="volume-mute" />
            ) : (
              <IonIcon className="text-indigo-600 text-xl" name="volume-high" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer