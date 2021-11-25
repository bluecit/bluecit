import styled from "styled-components";

const AboutStyles = styled.div`
  .page_heading {
    padding: var(--paddingLayout);
    background: linear-gradient(40deg, rgb(237, 29, 127), rgba(3, 37, 108));
    background-size: cover;
    h1 {
      color: var(--light_1);
      font-size: 4rem;
    }
    .heading_text {
      font-size: 2rem;
      color: var(--light_1);
    }
  }
  .main_text {
    padding: var(--paddingLayout);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .statement {
    background: ${(props) => props.theme.background};
    flex: 1 1 350px; //Stretching:
    /* flex: 0 1 350px; //No stretching: */
    margin: 1rem;
    padding: 0 2rem;
    p {
      font-size: 1.7rem;
    }
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 610px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
const About = () => {
  return (
    <AboutStyles>
      <div className='page_heading'>
        <h1>About Us</h1>
        <p className='heading_text'>
          BlueCIT is a professional experienced and innovative internet security
          & Software development consulting fırm that is dedicated to provide
          high quality services, strategic solutions, technical consulting, and
          data protection to businesses and organizations.
        </p>
      </div>
      <div className='main_text'>
        <div className='statement'>
          <h1>Our Mission </h1>
          <p>
            To position our company on the front line lead of the software
            development and cybersecurity sector and knowledge in the horn of
            Africa. engage constant learning to increase our efficiency and To
            enhance promote our client’s capabilities to operate their
            businesses in a safeguarded and fraud malware free environment by
            providing excellent technical assistance and remarkable consulting
            services with inflexible the highest level of integrity.
          </p>
        </div>
        <div className='statement'>
          <h1>Our Vision </h1>

          <p>
            To be a potential partner, customer-oriented, up-to-date, and
            innovative world class software development and internet security
            providing company. that helps elevates business and organizational
            data and knowledge security awareness by equipping them with
            knowledge based security strategic solutions with eminent
            efficiency.
          </p>
        </div>
      </div>
    </AboutStyles>
  );
};

export default About;
