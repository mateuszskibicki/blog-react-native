import React from "react";
import PropTypes from "prop-types";
import { TouchableNativeFeedback, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StylesMain from "../../../constants/StylesMain";

const ButtonIcon = ({ onPress, style, right, center, block, small, name }) => {
  //check if necessary exists
  if (!name || !(typeof name === "string")) return null;

  //return component
  return (
    <TouchableNativeFeedback onPress={onPress || null}>
      <View
        style={[
          styles.button,
          style,
          right && { alignSelf: "flex-end" },
          center && { alignSelf: "center" },
          block && { alignSelf: null, alignItems: "center" },
          small && {
            paddingVertical: 4,
            paddingHorizontal: 8,
            marginBottom: 16
          }
        ]}
      >
        <Ionicons name={name} size={30} color={StylesMain.secondaryTextColor} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    width: 45,
    height: 42,
    backgroundColor: StylesMain.backgroundColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: StylesMain.whiteSmoke,
    marginBottom: 24,
    marginRight: 16,
    ...StylesMain.shadow
  },
  text: {
    color: StylesMain.secondaryTextColor,
    fontWeight: StylesMain.textBoldWeight,
    fontFamily: StylesMain.fontFamily,
    fontSize: 18,
    padding: 0
  }
});

ButtonIcon.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  right: PropTypes.bool,
  center: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool
};

export default ButtonIcon;
