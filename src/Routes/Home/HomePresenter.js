import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePersenter = ({ nowPlaying, popular, upComing, error, loading }) =>
  null;

HomePersenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upComing: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePersenter;
