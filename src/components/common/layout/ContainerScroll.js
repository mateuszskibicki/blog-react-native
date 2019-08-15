import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import StylesMain from "../../../constants/StylesMain";
import Spinner from "./Spinner";
import SubscribeMailchimp from "../../subscribe-mailchimp/SubscribeMailchimp";
import SearchIcon from "../search/SearchIcon";

const ContainerScroll = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {props.loading.loading ? (
          <Spinner />
        ) : (
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          >
            {props.children}
            <SubscribeMailchimp />
          </ScrollView>
        )}
      </View>
      <SearchIcon />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StylesMain.backgroundColor
  },
  contentContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: StylesMain.backgroundColor
  }
});

const mapStateToProps = ({ loading, mailchimp }) => {
  return { loading, mailchimp };
};

ContainerScroll.propTypes = {
  loading: PropTypes.object,
  mailchimp: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    loading: PropTypes.bool,
    success: PropTypes.bool
  }),
  children: PropTypes.any
};

export default connect(
  mapStateToProps,
  null
)(ContainerScroll);
