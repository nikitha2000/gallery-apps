import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import "./PhotoDetails.css";

const PhotoDetails = () => {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${photoId}`
        );
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
        setError("Error fetching data!");
      }
    };

    fetchPhoto();
  }, [photoId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-auto w-auto">
      <h2 className="pb-2">{photo.title}</h2>
      <img
        className="h-h-250 w-w-250 md:h-h-499 md:w-w-499"
        src={photo.thumbnailUrl}
        alt={photo.title}
      />
    </div>
  );
};

export default PhotoDetails;
