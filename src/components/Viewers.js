import React from "react";
import styled from "styled-components";

const Viewers = () => {
  const mediaPaths = [
    {
      image: "/images/viewers-disney.png",
      name: "disney",
      video: "/videos/disney.mp4",
    },
    {
      image: "/images/viewers-marvel.png",
      name: "marvel",
      video: "/videos/marvel.mp4",
    },
    {
      image: "/images/viewers-national.png",
      name: "national",
      video: "/videos/national-geographic.mp4",
    },
    {
      image: "/images/viewers-pixar.png",
      name: "pixar",
      video: "/videos/pixar.mp4",
    },
    {
      image: "/images/viewers-starwars.png",
      name: "starwars",
      video: "/videos/star-wars.mp4",
    },
  ];

  return (
    <Container>
      {mediaPaths?.map((data, index) => (
        <Wrap key={index}>
          <img src={data?.image} alt={data?.name} />
          <video autoPlay loop playsInline muted>
            <source src={data?.video} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};
const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  padding-top: 56.5%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgb(249, 249, 249, 0.1);
  img {
    inset: 0;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 32px 22px -10px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
export default Viewers;
