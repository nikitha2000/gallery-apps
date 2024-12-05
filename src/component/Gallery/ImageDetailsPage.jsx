import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PhotoDetails = () => {
  const { id } = useParams(); // Extract the photo ID from the route
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}` // Fetch specific photo
        );
        if (!response.ok) {
          throw new Error("Photo not found");
        }
        const data = await response.json();
        setPhoto(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPhotoDetails();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!photo) return <div>Loading...</div>;

  return (
    <div className="photo-details">
      <h2>{photo.title}</h2>
      <img src={photo.thumbnailUrl} alt={photo.title} />
    </div>
  );
};

export default PhotoDetails;
