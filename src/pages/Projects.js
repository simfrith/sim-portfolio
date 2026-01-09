import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <ProjectCard
        title="Networking Homelab"
        description="Built a multi-router Cisco homelab with VLANs and ACLs."
        image="/images/HomeLab.jpg"
        github="https://github.com/simfrith"
      />

      <ProjectCard
        title="Portfolio Website"
        description="Personal React portfolio deployed using Netlify."
        image="/images/images.jpg"
        github="https://github.com/simfrith"
      />
    </section>
  );
}

export default Projects;
