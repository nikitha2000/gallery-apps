import React from "react";
import { Photo } from "../../type"
import PhotoItem from "./PhotoItem";
import "./GalleryLayout.css";

interface GalleryLayoutProps{
   photos: Photo[];
   error: string | null;
   onToggleFavourite:(id:number) => void;
}

const GalleryLayout = ({ photos, error, onToggleFavourite}: GalleryLayoutProps ) => {
  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          onToggleFavourite={() => onToggleFavourite(photo.id)}
        />
      ))}
    </div>
  );
};

export default GalleryLayout;
