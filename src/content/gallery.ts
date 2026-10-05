export type GalleryPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  category: string;
  alt: string;
};

// No supplied event photograph has verified event mapping and publication consent.
// Generated event-01.webp through event-57.webp are excluded from deployment.
// Original private attachments are retained separately, not named in public code.
export const galleryPhotos: readonly GalleryPhoto[] = [];
