import React from "react";
import TextBlockSlice from "../../components/slices/TextBlockSlice";
import ImageSlice from "../../components/slices/ImageSlice";
import CodeSlice from "../../components/slices/CodeSlice";

export const sliceComponentsHelper = slices => {
  if (!slices || !slices.length || slices.length === 0) return null;
  let componentsToDisplay = [];
  componentsToDisplay =
    !slices || !slices.length
      ? null
      : slices.map((slice, index) => {
          if (slice === null || !slice.type) return null;
          if (slice.type === "text_block")
            return <TextBlockSlice key={index} content={slice} />;
          if (slice.type === "image")
            return <ImageSlice key={index} content={slice} />;
          if (slice && slice.type === "code_component")
            return <CodeSlice key={index} content={slice} />;
          return null;
        });
  return componentsToDisplay;
};
