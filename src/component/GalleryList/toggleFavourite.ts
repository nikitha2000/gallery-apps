import { Photo } from "../../type";

const toggleFavourite = (photos:Photo[], id:number) => {
  const updatedPhotos = photos.map((photo) =>
    photo.id === id ? { ...photo, favourites: !photo.favourites } : photo
  );
  const newFavourites = updatedPhotos.filter((photo) => photo.favourites);
  localStorage.setItem("favourites", JSON.stringify(newFavourites));
  return updatedPhotos;
};

export default toggleFavourite;