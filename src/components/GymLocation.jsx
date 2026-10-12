
import "./GymLocation.css";

export default function GymLocation() {
  const mapQuery = "Canary Wharf, London, United Kingdom";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(mapQuery);

  const mapUrl =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(mapQuery) +
    "&t=&z=14&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="gym-location">
      <div className="gym-location__header">
        <span className="gym-location__eyebrow">
          FIND YOUR FITNESS DESTINATION
        </span>

        <h2>Find Your <span>FITCORE</span></h2>

        <p>
          Your fitness journey starts here.
          Visit us in Canary Wharf, London.
        </p>
      </div>

      <div className="gym-location__card">
        <div className="gym-location__map">
          <iframe
            title="FITCORE Gym Location in Canary Wharf London"
            src={mapUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="gym-location__details">
          <div className="gym-location__icon">📍</div>

          <div>
            <h3>FITCORE London</h3>
            <p>Canary Wharf, London, United Kingdom</p>
          </div>

          <a
            className="gym-location__button"
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
