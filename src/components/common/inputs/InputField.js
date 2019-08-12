import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const InputField = ({
  stylesContainer,
  stylesInput,
  onChangeText,
  value,
  placeholder
}) => {
  if (!onChangeText || !placeholder) return null;
  return (
    <View style={[styles.inputContainer, stylesContainer && stylesContainer]}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        style={[styles.inputStyles, stylesInput && stylesInput]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    padding: 8,
    marginBottom: 16,
    backgroundColor: StylesMain.backgroundColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: StylesMain.whiteSmoke,
    ...StylesMain.shadow
  },
  inputStyles: {
    fontSize: 16,
    color: StylesMain.secondaryTextColor,
    fontFamily: StylesMain.fontFamily,
    fontWeight: StylesMain.textBoldWeight
  }
});

InputField.propTypes = {
  stylesContainer: PropTypes.object,
  stylesInput: PropTypes.object,
  onChangeText: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string
};

export default React.memo(InputField);
