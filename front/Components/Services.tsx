import Link from "next/link";
import { Code } from "@styled-icons/entypo/";
import { Transform, Security } from "@styled-icons/material-twotone/";
import { People } from "@styled-icons/bootstrap/";
import { ServiceStyles } from "./styles/ServiceStyles";

export default function Services() {
  return (
    <ServiceStyles className='services'>
      <h1>Our Services</h1>

      <div className='cardbox'>
        <div className='card'>
          <div className='cardLeft'>
            <Code className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Software</span> Development
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              libero similique tenetur! Officiis ut ipsum, commodi
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>
        {/* Web  */}
        <div className='card'>
          <div className='cardLeft'>
            <Transform className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Digital</span> Transformation
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              libero similique tenetur! Officiis ut ipsum, commodi
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
      {/* Network */}
      <div className='cardbox'>
        <div className='card'>
          <div className='cardLeft'>
            <Security className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Cybersecurity</span> Solutions
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              libero similique tenetur! Officiis ut ipsum, commodi
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>

        {/* Consulting */}

        <div className='card'>
          <div className='cardLeft'>
            <People className='service_icon' />
          </div>
          <div className='cardRight'>
            <h2>
              <span>Consulting</span> Solutions
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              libero similique tenetur! Officiis ut ipsum, commodi
            </p>
            <Link href='/services'>
              <a className='btn'>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </ServiceStyles>
  );
}
