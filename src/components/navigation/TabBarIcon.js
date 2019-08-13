import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

import StylesMain from "../../constants/StylesMain";

const TabBarIcon = React.memo(({ name, focused }) => {
  if (!name) return null;
  return (
    <Ionicons
      name={name}
      size={focused ? 30 : 26}
      style={{ marginBottom: -5 }}
      color={focused ? StylesMain.primaryGreen : StylesMain.secondaryTextColor}
    />
  );
});

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool
};

export default TabBarIcon;
