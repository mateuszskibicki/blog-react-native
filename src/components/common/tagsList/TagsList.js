import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const TagsList = props => {
  if (!props.tags || typeof props.tags !== "string" || props.tags.length === 0)
    return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tags:</Text>
      {props.tags.split(";").map(tag => (
        <View style={styles.tagWrapper} key={tag}>
          <Text
            style={[
              styles.tag,
              props.style,
              props.secondary && { color: StylesMain.secondaryTextColor },
              props.bold && { fontWeight: StylesMain.textBoldWeight }
            ]}
          >
            {tag}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 12
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: StylesMain.textBoldWeight,
    fontFamily: StylesMain.fontFamily,
    marginBottom: 4,
    color: StylesMain.textColor
  },
  tagWrapper: {
    marginBottom: 5,
    marginRight: 4,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderColor: StylesMain.secondaryTextColor,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: StylesMain.backgroundColor,
    ...StylesMain.smallShadow
  },
  tag: {
    fontSize: 13,
    fontFamily: StylesMain.fontFamily,
    margin: 0
  }
});

TagsList.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secondary: PropTypes.bool,
  bold: PropTypes.bool,
  tags: PropTypes.string.isRequired
};

export default React.memo(TagsList);
