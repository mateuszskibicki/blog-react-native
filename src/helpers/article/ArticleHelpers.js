import {
  TextHelper,
  SmallTextHelper,
  ImgHelper
} from "prismic-helpers-sanitize";
import { sliceHelper } from "../slice-helpers/SliceHelpers";

export const singleArticleHelper = data => {
  if (!data || !data.data) return null;
  const articleData = data.data;

  const article = {
    uid: data.uid,
    title: TextHelper(articleData.title),
    short_description: TextHelper(articleData.short_description),
    categories: TextHelper(articleData.categories),
    tags: TextHelper(articleData.tags),
    date: SmallTextHelper(articleData.date),
    xs_img: ImgHelper(articleData.xs_img),
    small_img: ImgHelper(articleData.small_img),
    big_img: ImgHelper(articleData.big_img),
    author:
      articleData.author && articleData.author.data
        ? {
            uid: SmallTextHelper(articleData.author.data.uid),
            full_name: TextHelper(articleData.author.data.full_name),
            short_description: TextHelper(
              articleData.author.data.short_description
            ),
            image_avatar: ImgHelper(articleData.author.data.image_avatar)
          }
        : null,
    content: sliceHelper(articleData.body)
  };

  return article;
};
