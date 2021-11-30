import * as React from "react";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  padding: var(--paddingLayout);
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
export const ContentSection = styled.div`
  width: 50%;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  flex-direction: column;
  /* margin-bottom: 2rem; */
`;

export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  padding: 1rem;
  margin: 1rem;
`;
export const Paragraph = styled.p`
  font-size: 1.8rem;
  padding: 1rem;
  margin: 1rem;
`;

export const Background = styled.div`
  display: block;
  height: 30%;
  width: 50%;
  overflow: hidden;
  z-index: -1;
  min-height: 100%;
  background: linear-gradient(
    0deg,
    rgba(255, 0, 150, 0.3),
    rgba(255, 0, 150, 0.3)
  );
  background-blend-mode: multiply;
  background-size: cover;

  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

const ServiceComponent: React.FC<{
  invert?: boolean;
  title: string;
  description: string;
  image: string;
}> = ({ title, image, description, invert }) => {
  const Left = () => (
    <ContentSection>
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </ContentSection>
  );
  //   textAlign={invert ? "left" : "right"} border elevation={1}

  console.log({ title, description, image });
  const Right = () => (
    <Background>
      <Image
        src={image}
        width={640}
        height={"400px"}
        layout='responsive'
        quality={100}
        loading='lazy'
        alt={title}
        // layout='fill'
        objectFit='cover'
      />
    </Background>
  );

  const children = invert ? [Right, Left] : [Left, Right];
  return (
    <Container>
      {children.map((Child, i) => (
        <Child key={i} />
      ))}
    </Container>
  );
};

export default ServiceComponent;

//   minHeight='70vh'
//   background={invert ? "tint1" : "white"}
//   paddingY={majorScale(8)}
//   borderTop
//   display='flex'
//   alignItems='center'
//   position='relative'
//   overflow='hidden'
