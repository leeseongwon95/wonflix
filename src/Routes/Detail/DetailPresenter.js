import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPersenter = ({ result, error, loading }) => null;

DetailPersenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPersenter;
