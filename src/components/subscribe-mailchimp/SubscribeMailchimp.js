import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, KeyboardAvoidingView, Text, StyleSheet } from "react-native";
import { ButtonSecondary } from "../common/buttons";
import ErrorMessage from "../common/error/ErrorMessage";
import InputField from "../common/inputs/InputField";
//redux
import { subscribeToMailchimp } from "../../store/actions/mailchimp/mailchimpActions";
//styles
import StylesMain from "../../constants/StylesMain";

const SubscribeMailchimp = ({ mailchimp, subscribeToMailchimp }) => {
  // get data
  const { error, loading, success } = mailchimp;

  // email input
  const [email, setEmail] = useState("");

  const onChangeText = text => {
    setEmail(text);
  };

  const onSubscribe = () => {
    subscribeToMailchimp(email);
  };

  if (success)
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { marginBottom: 0 }]}>
          Thank you for your subscription!
        </Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Subscribe to be up to date</Text>
      <KeyboardAvoidingView style={styles.scrollAvoidContainer} enabled>
        <InputField
          onChangeText={onChangeText}
          placeholder={"Your email..."}
          value={email}
        />
        {loading ? (
          <ButtonSecondary
            center
            style={{ marginBottom: 0, borderColor: StylesMain.whiteSmoke }}
          >
            Please wait...
          </ButtonSecondary>
        ) : (
          <ButtonSecondary
            center
            style={{ marginBottom: 0, borderColor: StylesMain.whiteSmoke }}
            onPress={onSubscribe}
          >
            Subscribe
          </ButtonSecondary>
        )}
        {error && typeof error === "string" && (
          <ErrorMessage style={{ marginTop: 16 }} error={error} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginHorizontal: -16,
    marginTop: 32,
    padding: 32,
    backgroundColor: StylesMain.primaryGreen,
    ...StylesMain.shadow
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    color: StylesMain.whiteTextColor,
    fontFamily: StylesMain.fontFamily,
    fontWeight: StylesMain.textBoldWeight,
    textAlign: "center"
  },
  scrollAvoidContainer: {
    width: "100%"
  }
});

SubscribeMailchimp.propTypes = {
  subscribeToMailchimp: PropTypes.func,
  mailchimp: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    loading: PropTypes.bool,
    success: PropTypes.bool
  })
};

const mapStateToProps = ({ mailchimp }) => {
  return { mailchimp };
};

const mapDisptachToProps = {
  subscribeToMailchimp
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(SubscribeMailchimp);
