export interface Project {
  id: number;
  title: string;
  location: string;
  date?: string;
  category: string;
  description: string;
  clientName: string;
  clientReview: string;
  clientRating: number;
  images: string[];
  mainImage: string;
  video?: string;
  youtubeVideoId?: string;
  vimeoVideoId?: string;
  videoUnavailable?: boolean;
  useLocalVideo?: boolean;
}
