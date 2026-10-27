import { useState } from 'react';

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

  const previous = () => {
    if (selected !== null) {
      setSelected((selected - 1 + photos.length) % photos.length);
    }
  };

  const next = () => {
    if (selected !== null) {
      setSelected((selected + 1) % photos.length);
    }
  };

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
            className={`gallery-item ${index === 0 ? 'featured' : ''}`}
            key={`${photo.src}-${index}`}
            onClick={() => setSelected(index)}
            aria-label={`View ${photo.caption}`}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <span className="gallery-caption">{photo.caption}</span>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Engagement photo viewer"
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close viewer"
          >
            ×
          </button>

          {photos.length > 1 && (
            <button
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
            <img
              src={photos[selected].src}
              alt={photos[selected].caption}
            />
            <figcaption>{photos[selected].caption}</figcaption>
            <p className="lightbox-count">
              {selected + 1} / {photos.length}
            </p>
          </figure>

          {photos.length > 1 && (
            <button
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
        </div>
      )}
    </section>
  );
}