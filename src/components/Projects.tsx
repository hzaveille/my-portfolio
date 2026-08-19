import { projects } from "../data/projects";

const LEFT_CONTRIBUTION_IDS = [2, 4]; // Mail Courier Dash, AskEllie
const LEFT_VIDEOS_IDS = [5]; // Penguin-Seal Shooter & Candy Kingdom

function Projects() {
  return (
    <section id="work">
      <div className="projects-container">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const contributionOnLeft = LEFT_CONTRIBUTION_IDS.includes(
              project.id,
            );
            const videosOnLeft = LEFT_VIDEOS_IDS.includes(project.id);

            const videoBlock = project.videos && project.videos.length > 0 && (
              <div className="project-videos">
                <strong>Gameplay</strong>
                {project.videos.map((video) => (
                  <video key={video} controls preload="metadata" playsInline>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            );

            return (
              <article
                className={`project-card project-${project.id}`}
                key={project.id}
              >
                <div className="project-media">
                  <div className="project-images">
                    {project.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                      />
                    ))}
                  </div>

                  {contributionOnLeft && (
                    <div className="project-contribution">
                      <strong>My Contribution</strong>
                      <p>{project.contribution}</p>
                    </div>
                  )}

                  {videosOnLeft && videoBlock}
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-details">
                    <div>
                      <strong>Skills</strong>
                      <ul>
                        {project.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong>Tools</strong>
                      <ul>
                        {project.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {!contributionOnLeft && (
                    <div className="project-contribution">
                      <strong>My Contribution</strong>
                      <p>{project.contribution}</p>
                    </div>
                  )}

                  {!videosOnLeft && videoBlock}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
