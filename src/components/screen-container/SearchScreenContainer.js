import React, { useState } from "react";
import PropTypes from "prop-types";
import { KeyboardAvoidingView, View, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import ContainerCenter from "../common/layout/ContainerCenter";
import InputField from "../common/inputs/InputField";
import { ButtonPrimary } from "../common/buttons";
import ErrorMessage from "../common/error/ErrorMessage";

const SearchScreenContainer = ({ navigation }) => {
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
  };

  return (
    <ContainerCenter>
      <KeyboardAvoidingView enabled style={styles.container}>
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
        <View style={styles.container}>
          <ButtonPrimary style={{ flex: 0, width: "100%" }} onPress={onPress}>
            Find
          </ButtonPrimary>
        </View>
      </KeyboardAvoidingView>
    </ContainerCenter>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  }
});

SearchScreenContainer.propTypes = {
  navigation: PropTypes.object
};

export default withNavigation(SearchScreenContainer);
