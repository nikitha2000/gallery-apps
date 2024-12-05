import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PhotoDetails.css";

const PhotoDetails = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
        setError("Error fetching data!");
      }
    };

    fetchPhoto();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="photo-details">
      <h2>{photo.title}</h2>
      <img className="photo-card" src={photo.thumbnailUrl} alt={photo.title} />
    </div>
  );
};

export default PhotoDetails;
