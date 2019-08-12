import React from "react";
import { View, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { ButtonPrimary, ButtonSecondary } from "../common/buttons";
import { MediumText } from "../common/text";

const CategoriesButtons = ({ navigation, category }) => {
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
          onPress={() => navigation.push("Articles")}
        >
          All
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles")}
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
            navigation.push("Articles", { category: "Full-Stack" })
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
            navigation.push("Articles", { category: "Full-Stack" })
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
          onPress={() => navigation.push("Articles", { category: "Front-End" })}
        >
          Front-End
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles", { category: "Front-End" })}
        >
          Front-End
        </ButtonSecondary>
      )}
      {category && category === "Back-End" ? (
        <ButtonPrimary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles", { category: "Back-End" })}
        >
          Back-End
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles", { category: "Back-End" })}
        >
          Back-End
        </ButtonSecondary>
      )}
      {category && category === "Other" ? (
        <ButtonPrimary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles", { category: "Other" })}
        >
          Other
        </ButtonPrimary>
      ) : (
        <ButtonSecondary
          mb0
          small
          noContainer
          onPress={() => navigation.push("Articles", { category: "Other" })}
        >
          Other
        </ButtonSecondary>
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
  }
});

export default withNavigation(CategoriesButtons);
