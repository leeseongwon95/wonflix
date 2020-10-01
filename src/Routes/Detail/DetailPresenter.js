import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Tmdb = styled.a`
  width: 70px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #008080;
  color: #ffd700;
  letter-spacing: 1px;
  font-size: 14px;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

const ItemContainer = styled.div`
  font-size: 14px;
  margin: 20px 0;
  width: 100%;
`;

const Item = styled.span``;

const Stars = styled.span`
  color: #ffe228;
`;

const Divider = styled.span`
  margin: 0px 10px;
`;

const CompanyContainer = styled.div`
  margin-top: 20px;
  width: 20%;
  height: 32px;
  display: flex;
  align-items: center;
`;

const CompanyLogo = styled.img`
  max-height: 20px;
  max-width: 50px;
  padding: 5px;
  background-color: #ffd700;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Overview = styled.p`
  font-size: 12px;
  margin-top: 10px;
  opacity: 0.7;
  line-height: 1.4;
  width: 50%;
`;

const Iframe = styled.iframe`
  display: block;
  width: 50%;
  margin-top: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const DetailPersenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Wonflix</title>
      </Helmet>
      <Loader />
    </>
  ) : error ? (
    <Message color="#e74c3c" text="There's no detail" />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title && result.original_title.length > 20
            ? `${result.original_title.substring(0, 19)}... `
            : result.original_title
            ? result.original_title
            : result.original_name && result.original_name.length > 20
            ? `${result.original_name.substring(0, 19)}... `
            : result.original_name}{" "}
          | Wonflix
        </title>
      </Helmet>
      <BackDrop
        bgImage={
          result.backdrop_path
            ? `http://image.tmdb.org/t/p/original${result.backdrop_path}`
            : result.poster_path
            ? `http://image.tmdb.org/t/p/original${result.poster_path}`
            : require("../../assets/noPosterSmall.png")
        }
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `http://image.tmdb.org/t/p/original${result.poster_path}`
              : result.backdrop_path
              ? `http://image.tmdb.org/t/p/original${result.backdrop_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <TitleContainer>
            <Title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </Title>
            {result.id && (
              <Tmdb
                href={`https://www.themoviedb.org/movie/${result.id}`}
                target="_blank"
              >
                TMDb
              </Tmdb>
            )}
          </TitleContainer>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date
                ? result.first_air_date.substring(0, 4)
                : "No Information"}
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.runtime && result.runtime > 0
                ? result.runtime
                : result.runtime === 0
                ? "0"
                : result.episode_run_time && result.episode_run_time > 0
                ? result.episode_run_time[0]
                : "0"}{" "}
              min
            </Item>
            <Divider>·</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>·</Divider>
            <Stars role="img" aria-label="rating">
              {result.vote_average >= 0 && result.vote_average <= 2 && "★☆☆☆☆"}
              {result.vote_average > 2 && result.vote_average <= 4 && "★★☆☆☆"}
              {result.vote_average > 4 && result.vote_average <= 6 && "★★★☆☆"}
              {result.vote_average > 6 && result.vote_average <= 8 && "★★★★☆"}
              {result.vote_average > 8 && result.vote_average <= 10 && "★★★★★"}
            </Stars>
            <CompanyContainer>
              {result.production_companies &&
                result.production_companies.length > 0 &&
                result.production_companies.map(
                  (company) =>
                    company.logo_path && (
                      <CompanyLogo
                        key={company.name}
                        alt={company.name}
                        title={company.name}
                        width="100%"
                        height="100%"
                        src={`http://image.tmdb.org/t/p/original${company.logo_path}`}
                      />
                    )
                )}
            </CompanyContainer>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {result.videos.results &&
            result.videos.results
              .slice(0, 2)
              .map((video, index) => (
                <Iframe
                  key={index}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameborder="0"
                ></Iframe>
              ))}
        </Data>
      </Content>
    </Container>
  );

DetailPersenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPersenter;
