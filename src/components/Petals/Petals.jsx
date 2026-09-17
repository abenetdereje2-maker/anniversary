import "./Petals.css";

export default function Petals() {
  return (
    <>
      {[...Array(25)].map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
          }}
        >
          🌸
        </span>
      ))}
    </>
  );
}