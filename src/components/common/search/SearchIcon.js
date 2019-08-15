import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  View,
  TouchableNativeFeedback,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StylesMain from "../../../constants/StylesMain";
import SearchModal from "./SearchModal";

const SearchIcon = ({ loading }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableNativeFeedback
        onPress={() => (!loading.loading ? setModalVisible(true) : null)}
      >
        <View style={styles.button}>
          {loading.loading ? (
            <ActivityIndicator size="small" color={StylesMain.primaryGreen} />
          ) : (
            <Ionicons
              name={"md-search"}
              size={30}
              color={StylesMain.primaryGreen}
            />
          )}
        </View>
      </TouchableNativeFeedback>
      <SearchModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: StylesMain.backgroundColor,
    borderWidth: 1,
    borderColor: StylesMain.primaryGreen,
    position: "absolute",
    bottom: 15,
    left: 15,
    borderRadius: 100,
    ...StylesMain.shadow
  }
});

SearchIcon.propTypes = {
  loading: PropTypes.shape({
    loading: PropTypes.bool
  })
};

const mapStateToProps = ({ loading }) => {
  return { loading };
};

export default connect(
  mapStateToProps,
  null
)(SearchIcon);
