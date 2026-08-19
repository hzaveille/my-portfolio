function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <p className="section-label">ABOUT</p>
        <h2>A little about me.</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Multimedia Computing student at Universiti Teknologi MARA
            (UiTM) Shah Alam, with an interest in combining technology,
            creativity, and interactive experiences.
          </p>

          <p>
            My studies have allowed me to explore different areas of computing,
            from mobile and web development to game development, UI/UX design,
            animation, and 2D/3D multimedia.
          </p>

          <p>
            I enjoy learning by building things, experimenting with different
            technologies, and turning ideas into something people can interact
            with.
          </p>
        </div>

        <div className="about-interests">
          <p className="interests-label">I'M INTERESTED IN</p>

          <ul>
            <li>Mobile App Development</li>
            <li>Web Development</li>
            <li>Game Development</li>
            <li>UI/UX Design</li>
            <li>2D / 3D Multimedia</li>
            <li>Software Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
