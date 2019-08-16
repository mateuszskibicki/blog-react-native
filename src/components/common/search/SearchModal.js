import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { View, Modal, KeyboardAvoidingView, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";
import InputField from "../inputs/InputField";
import ErrorMessage from "../error/ErrorMessage";
import { ButtonPrimary, ButtonSecondary } from "../buttons";

const SearchModal = ({
  loading,
  navigation,
  modalVisible,
  setModalVisible
}) => {
  if (loading.loading) return null;

  //state for input value and errors
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  const onChangeText = text => setSearchText(text);

  const onPress = () => {
    //if length 0 return error
    if (!searchText || searchText.length === 0) return setError(true);
    //if ok set error false
    setError(false);
    //take the value and change setSearchText to empty string
    const value = searchText;
    setSearchText("");
    //naviagate to articles with searchText
    navigation.navigate("Articles", { page: 1, searchText: value });
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <KeyboardAvoidingView enabled style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <InputField
            placeholder="Find articles..."
            onChangeText={onChangeText}
            value={searchText}
          />
          {error && (
            <ErrorMessage
              style={{ marginBottom: 16 }}
              error={"Field is required."}
            />
          )}
          <View style={styles.buttonContainer}>
            <ButtonSecondary
              mb0
              small
              style={{ marginRight: 16 }}
              onPress={() => setModalVisible(false)}
            >
              Close
            </ButtonSecondary>
            <ButtonPrimary mb0 small onPress={onPress}>
              Find
            </ButtonPrimary>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.2)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%"
  },
  contentContainer: {
    flex: 0,
    width: "100%",
    paddingHorizontal: 32,
    paddingVertical: 64,
    borderRadius: 5,
    backgroundColor: StylesMain.backgroundColor,
    ...StylesMain.bigShadow
  },
  buttonContainer: {
    flex: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

SearchModal.propTypes = {
  loading: PropTypes.shape({
    loading: PropTypes.bool
  }),
  navigation: PropTypes.object,
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func
};

const mapStateToProps = ({ loading }) => {
  return { loading };
};

export default connect(
  mapStateToProps,
  null
)(withNavigation(SearchModal));
