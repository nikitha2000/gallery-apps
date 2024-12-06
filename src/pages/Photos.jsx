import React from "react";
import GalleryLayout from "../component/Gallery/GalleryLayout";

function Photos({ searchQuery }) {
  return <GalleryLayout searchQuery={searchQuery} />;
}

export default Photos;
