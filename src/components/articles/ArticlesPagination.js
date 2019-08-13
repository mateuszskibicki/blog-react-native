import React from "react";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import { View, StyleSheet } from "react-native";
import { NormalText } from "../common/text";
import { ButtonIcon } from "../common/buttons";

const ArticlesPagination = ({
  navigation,
  category,
  currentPage,
  totalPages,
  searchText
}) => {
  if (Number(totalPages) === 0) return null;

  const onPressBack = () => {
    if (Number(currentPage) !== 1) {
      navigation.push("Articles", {
        page: Number(currentPage) - 1,
        category,
        searchText
      });
    }
  };

  const onPressNext = () => {
    if (Number(currentPage) < Number(totalPages)) {
      navigation.push("Articles", {
        page: Number(currentPage) + 1,
        category,
        searchText
      });
    }
  };

  return (
    <View style={styles.container}>
      {/* Button back */}
      <View>
        <ButtonIcon small mb0 name="md-arrow-dropleft" onPress={onPressBack} />
      </View>
      <NormalText bold secondary mb0>
        Page {currentPage} of {totalPages}
      </NormalText>
      {/* Button next */}
      <View>
        <ButtonIcon
          style={{ marginLeft: 16 }}
          small
          mb0
          name="md-arrow-dropright"
          onPress={onPressNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});

ArticlesPagination.propTypes = {
  navigation: PropTypes.object,
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalPages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  category: PropTypes.string,
  searchText: PropTypes.string
};

export default withNavigation(ArticlesPagination);
