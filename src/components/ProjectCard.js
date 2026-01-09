import "./ProjectCard.css";

function ProjectCard({ title, description, image, github }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src={image} alt={title} className="project-image" />

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="project-link">View on GitHub →</span>
      </div>
    </a>
  );
}

export default ProjectCard;
