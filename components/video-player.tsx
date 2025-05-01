"use client";

import { useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  className?: string;
  title?: string;
}

/**
 * VideoPlayer component that uses YouTube as a reliable video hosting service
 * This ensures videos will play properly in production
 */
const VideoPlayer = ({ videoId, className = '', title = 'Video' }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="w-8 h-8 border-4 border-navy-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-red-500 text-center p-4 z-10">
          Video could not be loaded. Please try again later.
        </div>
      )}
      
      <iframe
        className={`w-full aspect-video ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&loop=1&playlist=${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};

export default VideoPlayer;
