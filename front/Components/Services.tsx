import styles from "../styles/Services.module.css";
import { ServiceStyles } from "./styles/ServiceStyles";
export default function Services() {
  return (
    <ServiceStyles className='services'>
      <h1>Our Services</h1>
      <div className='container'>
        <div className='cardbox'>
          <div className='card'>
            <div className='cardLeft'>
              <span className='material-icons'>api</span>
            </div>
            <div className='cardRight'>
              <h2>
                <span>Software</span> Development
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>
          {/* Web  */}
          <div className='card'>
            <div className='cardLeft'>
              <span className='material-icons'>public</span>
            </div>
            <div className='cardRight'>
              <h2>
                <span>Digital</span> Transformation
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>
        </div>
        {/* Network */}
        <div className='cardbox'>
          <div className='card'>
            <div className='cardLeft'>
              <span className='material-icons'>signal_cellular_alt</span>
            </div>
            <div className='cardRight'>
              <h2>
                <span>Cybersecurity</span> Solutions
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>

          {/* Consulting */}

          <div className='card'>
            <div className='cardLeft'>
              <span className='material-icons'>business_center</span>
            </div>
            <div className='cardRight'>
              <h2>
                <span>Consulting</span> Solutions
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus libero similique tenetur! Officiis ut ipsum, commodi
              </p>
              <a className='btn'> Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </ServiceStyles>
  );
}
