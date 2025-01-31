'use client';

import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface VideoPlayerProps {
  src: string;
  title: string;
  thumbnail: string;
}

const VideoPlayer = ({ src, title, thumbnail }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const playerRef = useRef<ReactPlayer>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const formatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, '0');
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  const handleProgress = (state: { played: number }) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleSeek = (value: number) => {
    setPlayed(value);
    playerRef.current?.seekTo(value);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 3000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-8">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={containerRef}
          className="relative rounded-xl overflow-hidden bg-[rgba(17,25,34,0.8)] backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-[rgba(255,255,255,0.1)]"
        >
          {/* Title Bar */}
          <div className={`absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/80 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-white text-xl font-medium">{title}</h1>
          </div>

          {/* Video Player */}
          <ReactPlayer
            ref={playerRef}
            url={src}
            width="100%"
            height="100%"
            playing={isPlaying}
            volume={volume}
            muted={isMuted}
            onProgress={handleProgress}
            onDuration={setDuration}
            onReady={() => setIsLoading(false)}
            className="aspect-video"
          />

          {/* Controls Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress Bar */}
            <div className="mb-4">
              <Slider
                value={[played * 100]}
                max={100}
                step={0.1}
                className="h-1 bg-gray-600"
                onValueChange={(value) => handleSeek(value[0] / 100)}
              />
            </div>

            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-white" />
                  )}
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2 group">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-6 h-6 text-white" />
                    ) : (
                      <Volume2 className="w-6 h-6 text-white" />
                    )}
                  </button>
                  <div className="w-0 group-hover:w-20 transition-all duration-300 overflow-hidden">
                    <Slider
                      value={[volume * 100]}
                      max={100}
                      className="h-1"
                      onValueChange={(value) => setVolume(value[0] / 100)}
                    />
                  </div>
                </div>

                {/* Time Display */}
                <div className="text-white text-sm">
                  {formatTime(played * duration)} / {formatTime(duration)}
                </div>
              </div>

              {/* Right Controls */}
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                {isFullscreen ? (
                  <Minimize className="w-6 h-6 text-white" />
                ) : (
                  <Maximize className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;