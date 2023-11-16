import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const defaultDogImages = {
  15: "https://upload.wikimedia.org/wikipedia/commons/a/a0/000_American_Pit_Bull_Terrier.jpg",
  125: "https://www.petfinder.com/sites/default/files/images/content/great-pyrenees-detail-scaled.jpg",
  212: "https://cdn.britannica.com/66/235666-050-751046D6/Saint-bernard-dog-st-bernard-standing-snow.jpg",
};

const Card = ({ id, name, image, temperaments, weight }) => {
  const handleImageError = (e) => {
    const defaultImage =
      defaultDogImages[id] ||
      "https://www.nicepng.com/png/detail/221-2215035_404doge-doge-404.png";
    e.target.src = defaultImage;
  };

  return (
    <div className={styles.card}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <img
          src={image}
          alt={name}
          className={styles.card__image}
          onError={handleImageError}
        />
        <div className={styles.card__overlay}>
          <div className={styles.card__header}>
            <div className={styles.card__thumb}></div>
            <div>
              <h3 className={styles.card__title}>{name}</h3>
            </div>
          </div>
          <p className={styles.card__description}>
            <span className={styles.card__tagline}>{temperaments}</span>
            <span className={styles.card__status}>Peso: {weight}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;