import {
  TextHelper,
  SmallTextHelper,
  ImgHelper
} from "prismic-helpers-sanitize";

export const articlesListHelper = data => {
  if (!data || !data.results) return null;
  const articlesData = data.results;

  const articles = articlesData.map(article => ({
    key: article.uid,
    uid: article.uid,
    title: TextHelper(article.data.title),
    short_description: TextHelper(article.data.short_description),
    categories: TextHelper(article.data.categories),
    tags: TextHelper(article.data.tags),
    date: SmallTextHelper(article.data.date),
    small_img: ImgHelper(article.data.small_img),
    xs_img: ImgHelper(article.data.xs_img),
    author:
      article.data.author && article.data.author.data
        ? {
            uid: SmallTextHelper(article.data.author.data.uid),
            full_name: TextHelper(article.data.author.data.full_name),
            short_description: TextHelper(
              article.data.author.data.short_description
            ),
            image_avatar: ImgHelper(article.data.author.data.image_avatar)
          }
        : null
  }));

  return articles;
};
