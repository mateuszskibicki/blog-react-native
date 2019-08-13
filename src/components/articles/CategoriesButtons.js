import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { ButtonPrimary, ButtonSecondary, ButtonIcon } from "../common/buttons";
import { MediumText, NormalText } from "../common/text";

const CategoriesButtons = ({ navigation, category, searchText }) => {
  return (
    <View style={styles.buttonsContainer}>
      <MediumText bold style={{ width: "100%" }}>
        Categories:
      </MediumText>
      {!category ? (
        <ButtonPrimary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles", { searchText })}
        >
          All
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles", { searchText })}
        >
          All
        </ButtonSecondary>
      )}
      {category && category === "Full-Stack" ? (
        <ButtonPrimary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Full-Stack" })
          }
        >
          Full-Stack
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Full-Stack" })
          }
        >
          Full-Stack
        </ButtonSecondary>
      )}
      {category && category === "Front-End" ? (
        <ButtonPrimary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Front-End" })
          }
        >
          Front-End
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Front-End" })
          }
        >
          Front-End
        </ButtonSecondary>
      )}
      {category && category === "Back-End" ? (
        <ButtonPrimary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Back-End" })
          }
        >
          Back-End
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Back-End" })
          }
        >
          Back-End
        </ButtonSecondary>
      )}
      {category && category === "Other" ? (
        <ButtonPrimary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Other" })
          }
        >
          Other
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() =>
            navigation.push("Articles", { searchText, category: "Other" })
          }
        >
          Other
        </ButtonSecondary>
      )}
      {searchText && (
        <View style={styles.containerSearchText}>
          <NormalText mb0 secondary bold>
            Results for: {searchText}
          </NormalText>
          <ButtonIcon
            mb0
            small
            name="md-close"
            style={{ marginRight: 0 }}
            onPress={() => navigation.push("Articles")}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 32
  },
  containerSearchText: {
    width: "100%",
    marginTop: 32,
    flex: 0,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});

CategoriesButtons.propTypes = {
  category: PropTypes.string,
  searchText: PropTypes.string,
  navigation: PropTypes.object
};

export default withNavigation(CategoriesButtons);
