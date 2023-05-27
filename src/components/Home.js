import React, { useEffect } from "react";
import styled from "styled-components";
import Imageslider from "./Imageslider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trendings from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { firebaseDb } from "../firebaseConfig";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  // console.log("userName", userName);
  useEffect(() => {
    let recommends = [];
    let newDisney = [];
    let trendings = [];
    let originals = [];
    firebaseDb.collection("movies").onSnapshot((snapshot) => {
      // eslint-disable-next-line array-callback-return
      snapshot?.docs?.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            // console.log("recommends", recommends);
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            // console.log("newDisney", newDisney);
            break;

          case "trending":
            trendings = [...trendings, { id: doc.id, ...doc.data() }];
            // console.log("trendings", trendings);
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            // console.log("originals", originals);
            break;

          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          trending: trendings,
          originals: originals,
          newDisney: newDisney,
        })
      );
    });
  }, [userName, dispatch]);
  return (
    <Container>
      <Imageslider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
