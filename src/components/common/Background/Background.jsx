import "./Background.css";

export default function Background() {
  return (
    <div className="background">

      {/* Shooting Stars */}
      <div className="shooting-star star1"></div>
      <div className="shooting-star star2"></div>
      <div className="shooting-star star3"></div>

      {/* Stars */}
      {[...Array(180)].map((_, i) => {
        const size = Math.random() * 3 + 1;

        return (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 5}s`,
            }}
          />
        );
      })}

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <span
          key={"heart" + i}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 6}s`,
          }}
        >
          ❤️
        </span>
      ))}

      {/* Clouds */}
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>

      {/* Moon */}
      <div className="moon"></div>

    </div>
  );
}