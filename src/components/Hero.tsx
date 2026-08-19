function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-label">MULTIMEDIA COMPUTING</p>

        <h1>
          Hi, I'm <span>Hazwani.</span>
        </h1>

        <h2>
          I create digital experiences through
          <span> code, design & multimedia.</span>
        </h2>

        <p className="hero-description">
          A Bachelor of Computer Science (Hons.) Multimedia Computing student
          with an interest in mobile applications, web development, game
          development, UI/UX, and digital media.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="button button-primary">
            View My Work
          </a>

          <a href="#contact" className="button button-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="deco-circle deco-circle-1">
          <span>CODE</span>
        </div>
        <div className="deco-circle deco-circle-2">
          <span>DESIGN</span>
        </div>
        <div className="deco-circle deco-circle-3">
          <span>CREATE</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
