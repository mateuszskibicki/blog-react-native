import React from "react";

// const TextBlockSlice: React.FunctionComponent<
//   ISliceComponentProps
// > = React.lazy(
//   (): Promise<any> => import("../../components/slices/TextBlockSlice")
// );
// const ImageSlice = React.lazy(
//   (): Promise<any> => import("../../components/slices/ImageSlice")
// );
// const CodeSlice = React.lazy(
//   (): Promise<any> => import("../../components/slices/CodeSlice")
// );
// const SingleMediaSlice: React.FunctionComponent<
//   ISliceComponentProps
// > = React.lazy(
//   (): Promise<any> => import("../../components/slices/SingleMediaSlice")
// );
// const MultipleMediaSlice: React.FunctionComponent<
//   ISliceComponentProps
// > = React.lazy(
//   (): Promise<any> => import("../../components/slices/MultipleMediaSlice")
// );

export const sliceComponentsHelper = slices => {
  if (!slices || !slices.length || slices.length === 0) return null;
  let componentsToDisplay = [];
  componentsToDisplay =
    !slices || !slices.length
      ? null
      : slices.map((slice, index) => {
          if (slice === null || !slice.type) return "";
          // if (slice.type === "text_block")
          //   return <TextBlockSlice key={index} content={slice} />;
          // if (slice.type === "image")
          //   return <ImageSlice key={index} content={slice} />;
          // if (slice && slice.type === "code_component")
          //   return <CodeSlice key={index} content={slice} />;
          // if (slice.type === "single_media_block")
          //   return <SingleMediaSlice key={index} content={slice} />;
          // if (slice.type === "multiple_media_blocks")
          //   return <MultipleMediaSlice key={index} content={slice} />;
          return "";
        });
  return componentsToDisplay;
};
