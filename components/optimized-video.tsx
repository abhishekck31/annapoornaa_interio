"use client";

import { useState, useEffect, useRef } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  onClick?: () => void;
}

/**
 * OptimizedVideo component for better video performance on Vercel
 * - Lazy loads videos
 * - Handles playback errors
 * - Optimizes for mobile devices
 */
const OptimizedVideo = ({
  src,
  poster,
  className = '',
  controls = false,
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  onClick,
}: OptimizedVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setError(null);
  }, [src]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError('Video could not be loaded. Please try again later.');
    console.error(`Error loading video: ${src}`);
    // Try to reload the video with a different approach
    if (videoRef.current) {
      // Force reload with a different technique
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.load();
        }
      }, 1000);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-navy-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-red-500 text-center p-4">
          {error}
        </div>
      )}
      
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={className}
        controls={controls}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="none"
        onLoadedData={handleLoadedData}
        onError={handleError}
        onClick={onClick}
      />
    </div>
  );
};

export default OptimizedVideo;
