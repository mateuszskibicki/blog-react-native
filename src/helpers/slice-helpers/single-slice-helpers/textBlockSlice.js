import { TextHelper, SmallTextHelper } from "prismic-helpers-sanitize";

export const textBlockSlice = data => {
  //If wrong type of data return null
  if (!data || !data.slice_type || !data.primary) return null;
  //Always take the slice_type and return it with data, helper will know what to display/render
  const dataType = data.slice_type;
  //Non repetable data inside slice
  const sliceFixedData = data.primary;
  //Repetable data (example: buttons)
  //const sliceRepetableData = data.items;

  //Data to send to the array of slices (always type and data if needed)
  return {
    type: dataType,
    size: SmallTextHelper(sliceFixedData.size),
    text_align: SmallTextHelper(sliceFixedData.text_align),
    special: SmallTextHelper(sliceFixedData.special),
    description: TextHelper(sliceFixedData.description)
  };
};
