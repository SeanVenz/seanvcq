function SectionDivider({ className = "" }) {
  return (
    <div className={`relative w-full h-24 overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full animate-wave"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
          className="fill-light-tertiary dark:fill-tertiary transition-colors duration-300"
        />
      </svg>
      <svg
        className="absolute w-full h-full animate-wave-delayed"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
          className="fill-light-tertiary dark:fill-tertiary opacity-50 transition-colors duration-300"
        />
      </svg>
    </div>
  );
}

export default SectionDivider; 