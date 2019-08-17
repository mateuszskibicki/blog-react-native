import React from "react";
import PropTypes from "prop-types";
import { BigText, MediumText, NormalText, SmallText } from "../common/text";

const TextBlockSlice = ({ content } = {}) => {
  if (!content || !content.size) return null;

  const bold =
    content.special === "bold" || content.special === "bold&secondary";
  const secondary =
    content.special === "secondary" || content.special === "bold&secondary";
  const center = content.text_align === "center";
  const right = content.text_align === "right";

  if (content.size === "big")
    return (
      <BigText bold={bold} secondary={secondary} center={center} right={right}>
        {content.description}
      </BigText>
    );

  if (content.size === "medium")
    return (
      <MediumText
        bold={bold}
        secondary={secondary}
        center={center}
        right={right}
      >
        {content.description}
      </MediumText>
    );

  if (content.size === "normal")
    return (
      <NormalText
        bold={bold}
        secondary={secondary}
        center={center}
        right={right}
      >
        {content.description}
      </NormalText>
    );

  if (content.size === "small")
    return (
      <SmallText
        bold={bold}
        secondary={secondary}
        center={center}
        right={right}
      >
        {content.description}
      </SmallText>
    );

  return null;
};

TextBlockSlice.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.string,
    special: PropTypes.string,
    text_align: PropTypes.string
  })
};

export default React.memo(TextBlockSlice);
