import { textBlockSlice } from "./single-slice-helpers/textBlockSlice";
import { codeSlice } from "./single-slice-helpers/codeSlice";
import { imageSlice } from "./single-slice-helpers/imageSlice";

// Remove null from array (locally when testing)
export const filterArray = array => {
  let index = -1,
    arr_length = array ? array.length : 0,
    resIndex = -1,
    result = [];
  while (++index < arr_length) {
    let value = array[index];
    if (value) {
      result[++resIndex] = value;
    }
  }
  return result;
};

export const sliceHelper = body => {
  if (!body || body.length === 0) return null;

  let slicesData;

  // eslint-disable-next-line array-callback-return
  slicesData = body.map(slice => {
    if (slice.slice_type === "text_block") return textBlockSlice(slice);
    if (slice.slice_type === "image") return imageSlice(slice);
    if (slice.slice_type === "code_component") return codeSlice(slice);
    return null;
  });

  //Return array of objects filtered if there is any null
  return filterArray(slicesData);
};

// export const prismicSliceContentRelationship = async (slices, PrismicConnection) => {
//     try {
//         // Check for slice type and if IDs is longer than 0 -> return correct data or return slice
//         slices = slices.map(async (slice) => {
//             // if (slice.type === 'testimonials' && slice.testimonials.length > 0) return testimonialsSliceRelationship(await PrismicConnection.getByIDs(slice.testimonials), slice.type);
//             // if (slice.type === 'packages' && slice.packages.length > 0) return packagesSliceRelationship(await PrismicConnection.getByIDs(slice.packages), slice.packagesWithRecommended, slice.type);
//             // if (slice.type === 'single_product_listing' && slice.products.length > 0) return productsSliceRelationship(await PrismicConnection.getByIDs(slice.products), slice.productBgColour, slice.type);
//             // if (slice.type === 'faq_slice' && slice.faqs.length > 0) return faqSliceRelationship(await PrismicConnection.getByIDs(slice.faqs), slice.type, slice);
//             return slice;
//         });
//         slices = await Promise.all(slices);
//         slices = filter_array(slices);
//         return slices;
//     } catch (err) {
//         return {error: true}
//     }
// };
