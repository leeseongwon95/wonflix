import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPersenter = ({
  movieResults,
  tvResults,
  error,
  loading,
  searchTerm,
  handleSubmit,
}) => null;

SearchPersenter.proptypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchPersenter;
