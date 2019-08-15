import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";
import Spinner from "./Spinner";

//icons
import SearchIcon from "../search/SearchIcon";

const ContainerCenter = ({ loading, children, style, row, p0 }) => {
  return (
    <View
      style={[
        styles.container,
        style,
        row && { flexDirection: "row" },
        p0 && { paddingHorizontal: 0 }
      ]}
    >
      {loading.loading ? <Spinner /> : children}
      <SearchIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StylesMain.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingHorizontal: 16
  }
});

const mapStateToProps = ({ loading }) => {
  return { loading };
};

ContainerCenter.propTypes = {
  loading: PropTypes.object,
  children: PropTypes.any
};

export default connect(
  mapStateToProps,
  null
)(ContainerCenter);
