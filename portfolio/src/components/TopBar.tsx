import "./TopBar.css";

export const TopBar = () => {
  return (
    <div className="top-bar">
      <a
        href="https://www.linkedin.com/in/andrew-yeh-ubc"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
        aria-label="LinkedIn"
      >
        {/* LinkedIn SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.6v1.8h.05c.5-.9 1.7-1.8 3.45-1.8 3.7 0 4.9 2.4 4.9 5.6V21h-4v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21H9z" />
        </svg>
      </a>

      <a
        href="https://github.com/AndrewYeh1"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
        aria-label="GitHub"
      >
        {/* GitHub SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.6-3.9-1.6-.6-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 .1.8 2.2 3.8 1.6v-2c-2.6-.2-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.8.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.6-5.5 5.8v2.1c0 .3.2.7.8.6a11.5 11.5 0 007.9-10.9C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      </a>

      <a href="mailto:andrewyeh08299@gmail.com" className="icon-link" aria-label="Email">
        {/* Email SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-7V6H4zm0 12h16V8l-8 7-8-7v10z" />
        </svg>
      </a>
    </div>
  );
};