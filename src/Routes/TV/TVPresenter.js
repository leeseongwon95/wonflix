import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>TV Show | Wonfilx</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>TV Show | Wonflix</title>
        </Helmet>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated TV Shows">
            {topRated.map((tvshow) => (
              <Poster
                key={tvshow.id}
                id={tvshow.id}
                imageUrl={tvshow.poster_path}
                title={tvshow.original_name}
                rating={tvshow.vote_average}
                year={tvshow.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular TV Shows">
            {popular.map((tvshow) => (
              <Poster
                key={tvshow.id}
                id={tvshow.id}
                imageUrl={tvshow.poster_path}
                title={tvshow.original_name}
                rating={tvshow.vote_average}
                year={tvshow.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today TV Shows">
            {airingToday.map((tvshow) => (
              <Poster
                key={tvshow.id}
                id={tvshow.id}
                imageUrl={tvshow.poster_path}
                title={tvshow.original_name}
                rating={tvshow.vote_average}
                year={tvshow.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
