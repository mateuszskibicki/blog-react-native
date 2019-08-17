import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import CodeScrollSide from "../common/code-component/CodeScrollSide";

const CodeSlice = ({ content } = {}) => {
  if (!content || !content.code) return null;

  return <CodeScrollSide code={content.code} />;
};

// const styles = StyleSheet.create({
//   imgMarginBottom: {
//     marginBottom: 32
//   }
// });

CodeSlice.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    code: PropTypes.string
  })
};

export default React.memo(CodeSlice);
