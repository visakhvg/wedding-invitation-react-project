import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type EngagementPhoto = {
  readonly src: string;
  readonly caption: string;
};

type Props = {
  photos: readonly EngagementPhoto[];
};

export default function EngagementGallery({ photos }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  if (!photos.length) return null;

  const close = () => setSelected(null);

  const previous = () => {
    setSelected((current) =>
      current === null ? null : (current - 1 + photos.length) % photos.length,
    );
  };

  const next = () => {
    setSelected((current) =>
      current === null ? null : (current + 1) % photos.length,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        previous();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling while viewing a photo
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected, photos.length]);

  return (
    <section className="engagement-gallery">
      <div className="gallery-heading">
        <p className="gallery-eyebrow">A day to remember</p>
        <h2>Our Engagement</h2>
        <p>Little moments, a lifetime of memories.</p>
      </div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button
            type="button"
            className={`gallery-item ${index === 0 ? "featured" : ""}`}
            key={`${photo.src}-${index}`}
            onClick={() => setSelected(index)}
            aria-label={`View ${photo.caption}`}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading={index === 0 ? "eager" : "lazy"}
            />
            <span className="gallery-caption">{photo.caption}</span>
          </button>
        ))}
      </div>

      {selected !== null &&
        createPortal(
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Engagement photo viewer"
            onClick={close}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={close}
              aria-label="Close viewer"
            >
              ×
            </button>

            {photos.length > 1 && (
              <button
                type="button"
                className="lightbox-arrow left"
                onClick={(event) => {
                  event.stopPropagation();
                  previous();
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>
            )}

            <figure onClick={(event) => event.stopPropagation()}>
              <img src={photos[selected].src} alt={photos[selected].caption} />

              <figcaption>{photos[selected].caption}</figcaption>

              <p className="lightbox-count">
                {selected + 1} / {photos.length}
              </p>
            </figure>

            {photos.length > 1 && (
              <button
                type="button"
                className="lightbox-arrow right"
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
              >
                ›
              </button>
            )}
          </div>,
          document.body,
        )}
    </section>
  );
}
