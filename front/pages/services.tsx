import Image from "next/image";
import softwareImage from "@/public/images/software.jpg";

import {
  HeadingText,
  PageHeading,
  ServiceContainer,
  ServiceHeading,
  ImageBox,
  ImageStyle,
  Content,
  P,
} from "@/styles/Page";

import styled from "styled-components";

const servicesContent = [
  {
    title: "Software Development",
    description:
      "We develop cutting-edge, sophisticated applications that allow an interactive business environment, effective, efficient e-commerce space, and simplify transaction processes, by connecting customers to consumers using the latest technologies",
  },
  {
    title: "Digital Transformation",
    description:
      "We assist to enhance organizational competitiveness, marketing strategy, operational management, and provide sustainable, transformative business solutions",
  },
  {
    title: "Vulnerability Management",
    description:
      "Our experts help you go beyond basic scanning, define key risk areas, analyze scan results with intelligence-driven context, customize reporting for clear visibility, and coordinate remediation activities",
  },
  {
    title: "Penetration Testing",
    description:
      "We perform simulated cyberattacks to gauge how effective your security systems are. During a penetration test, we will explore your system’s intrusion points, simulate server injections, bypass firewalls, and use exploits to assess your networks, websites and software’s vulnerabilities.",
  },
];

const Services = () => {
  return (
    <>
      <PageHeading>
        <h1>Our Services</h1>
        <HeadingText>
          Here at BlueCIT, We take the time to understand your cybersecurity
          challenges as well as your software requirements. Here are some of the
          primary services we offer to our clients.
        </HeadingText>
      </PageHeading>
      <ServiceContainer>
        <ImageStyle />
        <Content>
          <ServiceHeading></ServiceHeading>
          <P>
            We develop cutting-edge, sophisticated applications that allow an
            interactive business environment, effective, efficient e-commerce
            space, and simplify transaction processes, by connecting customers
            to consumers using the latest technologies.
          </P>
        </Content>
        <Content>
          <ServiceHeading>Software Development</ServiceHeading>
          <P>
            We develop cutting-edge, sophisticated applications that allow an
            interactive business environment, effective, efficient e-commerce
            space, and simplify transaction processes, by connecting customers
            to consumers using the latest technologies.
          </P>
        </Content>
      </ServiceContainer>
    </>
  );
};

export default Services;
