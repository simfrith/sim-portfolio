import ImageCarousel from "../components/ImageCarousel";
import boomlift from "../boomlift.jpg";
import tester from "../tester.jpeg";

function About() {
  const images = [boomlift, tester];

  return (
    <section className="about">
      <h1>About Me</h1>

      {/* Image Carousel */}
      <ImageCarousel images={images} />

      {/* Info Cards */}
      <div className="about-cards">
        <div className="about-card">
          <h3>Networking Engineer Goals</h3>
          <p>
            Aspiring network engineer with a strong interest in enterprise
            networking, routing and switching, VLAN design, and secure
            infrastructure for modern organizations.
          </p>
        </div>

        <div className="about-card">
          <h3>Data Cable Technician Experience</h3>
          <p>
            Hands-on experience installing and terminating structured cabling,
            working with lifts, testers, and maintaining physical network
            infrastructure in real-world environments.
          </p>
        </div>

        <div className="about-card">
          <h3>Hobbies & Interests</h3>
          <p>
            Running 5Ks with former cross-country teammates, completing hands-on
            maintenance projects, and listening to music in my downtime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
