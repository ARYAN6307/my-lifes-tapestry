// components/animatedgallery.tsx

"use client";

import React, { useState, useEffect, useCallback } from "react";
// Import Material-UI v5 components
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Import Lucide icons
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// --- Interfaces ---
interface GalleryMediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

interface MediaDialogProps {
  isOpen: boolean;
  onClose: () => void;
  media: GalleryMediaItem[];
  initialIndex: number;
  title: string;
}

// Custom styled component for the Dialog's Paper (background)
const StyledDialogPaper = styled(Box)(({ theme }) => ({
  width: '75vw',
  height: '75vh',
  maxWidth: 'none',
  maxHeight: 'none',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1a1a1a',
  borderRadius: '8px',
  overflow: 'hidden',
}));
// components/animatedgallery.tsx

// ... (imports and interfaces remain the same)

export const MediaDialog: React.FC<MediaDialogProps> = ({
  isOpen,
  onClose,
  media,
  initialIndex,
  title,
}) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentMediaIndex(initialIndex);
  }, [initialIndex, media.length]);

  useEffect(() => {
    if (currentMediaIndex >= media.length) {
      setCurrentMediaIndex(0);
    }
  }, [media.length, currentMediaIndex]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Keep your manual overflow management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);


  if (!isOpen) return null;
  if (!media || media.length === 0) return null;

  const currentMedia = media[currentMediaIndex];
  const totalMedia = media.length;

  const goToPrevMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? totalMedia - 1 : prevIndex - 1
    );
  };

  const goToNextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === totalMedia - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="media-dialog-title"
      PaperComponent={StyledDialogPaper}
      // *** ADD THIS PROP ***
      disableScrollLock={true} // Tell MUI to not interfere with body scrolling
    >
      {/* ... rest of your Dialog content ... */}
      <DialogTitle
        id="media-dialog-title"
        sx={{
          padding: '16px 24px',
          borderBottom: '1px solid #333',
          backgroundColor: '#222',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <span>
          {title} - Gallery ({currentMediaIndex + 1} of {totalMedia})
        </span>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: 'inherit' }}
        >
          <X size={20} />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: '#1a1a1a',
          position: 'relative',
        }}
      >
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.src}
            alt={currentMedia.alt || title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '4px',
            }}
          />
        ) : (
          <video
            key={currentMedia.src}
            src={currentMedia.src}
            controls={currentMedia.controls ?? true}
            autoPlay={currentMedia.autoPlay ?? true}
            loop={currentMedia.loop ?? false}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '4px',
            }}
          >
            Your browser does not support the video tag.
          </video>
        )}

        {/* Navigation Buttons for Dialog Media */}
        {totalMedia > 1 && (
          <>
            <IconButton
              onClick={goToPrevMedia}
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                zIndex: 10,
                left: '16px',
              }}
              aria-label="Previous media"
            >
              <ChevronLeft size={24} />
            </IconButton>
            <IconButton
              onClick={goToNextMedia}
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                zIndex: 10,
                right: '16px',
              }}
              aria-label="Next media"
            >
              <ChevronRight size={24} />
            </IconButton>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};