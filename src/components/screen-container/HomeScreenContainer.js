import React from "react";
import PropTypes from "prop-types";
import { BigText } from "../common/text";

const HomeScreenContainer = ({ articles } = {}) => {
  if (!articles || !articles.lastThree) return null;
  return <BigText>homepage</BigText>;
};

HomeScreenContainer.propTypes = {};

export default HomeScreenContainer;
