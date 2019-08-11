import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ListUL = props => {
  //check if necessary exists
  if (!props.list || !Array.isArray(props.list) || !props.list.length > 0)
    return null;

  //return component
  return (
    <View style={styles.container}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      {props.list.map((element, index) => (
        <Text
          key={index}
          style={[
            styles.textSingleList,
            props.secondary && { color: StylesMain.secondaryTextColor },
            props.bold && { fontWeight: StylesMain.textBoldWeight }
          ]}
        >
          - {element}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: 24
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    color: StylesMain.textColor,
    fontFamily: StylesMain.fontFamily,
    fontWeight: StylesMain.textBoldWeight
  },
  textSingleList: {
    marginLeft: 24,
    marginBottom: 10,
    color: StylesMain.textColor,
    fontSize: 18,
    fontFamily: StylesMain.fontFamily
  }
});

ListUL.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secondary: PropTypes.bool,
  bold: PropTypes.bool
};

export default React.memo(ListUL);
