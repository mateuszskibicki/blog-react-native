import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const CategoriesList = props => {
  if (
    !props.categories ||
    typeof props.categories !== "string" ||
    props.categories.length === 0
  )
    return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories:</Text>
      {props.categories.split(";").map(category => (
        <View style={styles.categoriesWrapper} key={category}>
          <Text
            style={[
              styles.category,
              props.style,
              props.secondary && { color: StylesMain.secondaryTextColor },
              props.bold && { fontWeight: StylesMain.textBoldWeight }
            ]}
          >
            {category}
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
  categoriesWrapper: {
    marginBottom: 5,
    marginRight: 4,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderColor: StylesMain.secondaryTextColor,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: StylesMain.backgroundColor,
    ...StylesMain.shadow
  },
  category: {
    fontSize: 13,
    fontFamily: StylesMain.fontFamily,
    margin: 0
  }
});

CategoriesList.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secondary: PropTypes.bool,
  bold: PropTypes.bool,
  categories: PropTypes.string.isRequired
};

export default React.memo(CategoriesList);
