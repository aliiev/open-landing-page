import { useState, useEffect } from 'react'

const useVideoPlayer = videoElement => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    isMuted: true
  })

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying
    })
  }

  useEffect(() => {
    if (playerState.isPlaying) {
      videoElement.current.play()
    } else {
      videoElement.current.pause()
    }
  }, [ playerState.isPlaying, videoElement ])

  const handleOnTimeUpdate = () => {
    const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100
    setPlayerState({
      ...playerState,
      progress
    })
  }

  const handleVideoProgress = event => {
    const manualChange = Number(event.target.value)
    videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange
    setPlayerState({
      ...playerState,
      progress: manualChange
    })
  }

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted
    })
  }

  useEffect(() => {
    if (playerState.isMuted) {
      videoElement.current.muted = true
    } else {
      videoElement.current.muted = false
    }
  }, [ playerState.isMuted, videoElement ])

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute
  }
}

export default useVideoPlayer