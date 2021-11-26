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
          <ServiceHeading>Software Development</ServiceHeading>
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
