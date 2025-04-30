"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ThumbnailGeneratorProps {
  videoIds: string[];
}

/**
 * Helper component to generate thumbnail URLs from YouTube video IDs
 * You can use this to get high-quality thumbnails for your videos
 */
const ThumbnailGenerator = ({ videoIds }: ThumbnailGeneratorProps) => {
  const [copied, setCopied] = useState<string | null>(null);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Video Thumbnail Generator</h2>
      <p className="mb-6 text-gray-600">Use these thumbnails for your gallery. Right-click to save images.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videoIds.map((id, index) => {
          const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
          const downloadPath = `/homevideo/thumbnail${index + 1}.jpg`;
          
          return (
            <div key={id} className="border rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image 
                  src={thumbnailUrl}
                  alt={`Thumbnail for video ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-gray-50">
                <p className="font-medium">Video {index + 1}</p>
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex">
                    <input 
                      type="text" 
                      value={thumbnailUrl} 
                      readOnly 
                      className="text-xs p-2 border rounded-l flex-1 bg-gray-100"
                    />
                    <button 
                      onClick={() => copyToClipboard(thumbnailUrl)}
                      className="bg-navy-600 text-white text-xs px-2 rounded-r"
                    >
                      {copied === thumbnailUrl ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Save as: <code>{downloadPath}</code>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-2">Instructions:</h3>
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          <li>Right-click each image and select "Save Image As..."</li>
          <li>Save the images to your project's <code>/public/homevideo/</code> folder</li>
          <li>Name them <code>thumbnail1.jpg</code>, <code>thumbnail2.jpg</code>, and <code>thumbnail3.jpg</code></li>
        </ol>
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
