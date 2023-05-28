import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { firebaseDb } from "../firebaseConfig";

const Details = () => {
  const [detailsData, setDetailsData] = useState({});
  const { id } = useParams();
  // console.log("{id}", id);

  useEffect(() => {
    firebaseDb
      .collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailsData(doc.data());
        } else {
          console.log("no such Movie data found");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
  // console.log("detailsData", detailsData);
  return (
    <Container>
      <Background>
        <img src={detailsData?.backgroundImg} alt={detailsData?.title} />
      </Background>
      <ImgTitle>
        <img src={detailsData?.titleImg} alt={detailsData?.title} />
      </ImgTitle>
      <Contentmeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play_button" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="trailer_button" />
            <span>Trailer</span>
          </Trailer>
          <Addlist>
            <span />
            <span />
          </Addlist>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="group_icon" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitles>{detailsData?.subTitle}</SubTitles>
        <Description>{detailsData?.description}</Description>
      </Contentmeta>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  min-height: calc(100vh -250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;
const Background = styled.div`
  left: 0;
  right: 0;
  top: 0;
  opacity: 0.8;
  position: fixed;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 25px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const Contentmeta = styled.div`
  max-width: 900px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 25px 0;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 24px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const Addlist = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  cursor: pointer;

  span {
    background-color: rgba(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translate(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled(Addlist)``;

const SubTitles = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 26px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Details;
