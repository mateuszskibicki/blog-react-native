import React from "react";
import PropTypes from "prop-types";
import { TouchableNativeFeedback, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StylesMain from "../../../constants/StylesMain";

const ButtonIcon = ({ onPress, style, small, big, name, mb0 }) => {
  //check if necessary exists
  if (!name || !(typeof name === "string")) return null;

  //check size
  let size = 30;
  small && (size = 25);
  big && (size = 35);

  //return component
  return (
    <TouchableNativeFeedback onPress={onPress || null}>
      <View
        style={[
          styles.button,
          style,
          small && {
            width: 35,
            height: 32
          },
          big && {
            width: 55,
            height: 50
          },
          mb0 && { marginBottom: 0 }
        ]}
      >
        <Ionicons
          name={name}
          size={size}
          color={StylesMain.secondaryTextColor}
        />
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
    marginBottom: 16,
    marginRight: 16,
    ...StylesMain.shadow
  },
  text: {
    color: StylesMain.secondaryTextColor,
    fontWeight: StylesMain.textBoldWeight,
    fontFamily: StylesMain.fontFamily,
    textAlign: "center",
    fontSize: 18,
    padding: 0
  }
});

ButtonIcon.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
  big: PropTypes.bool,
  small: PropTypes.bool,
  mb0: PropTypes.bool,
  name: PropTypes.string.isRequired
};

export default ButtonIcon;
