import React from "react";
import PropTypes from "prop-types";
import ArticleHeader from "../article/ArticleHeader";
import { sliceComponentsHelper } from "../../helpers/slice-helpers/SliceComponentsHelpers";

const SingleArticleScreenContainer = ({ article } = {}) => {
  if (!article) return null;

  const {
    uid,
    title,
    categories,
    tags,
    short_description,
    date,
    xs_img,
    small_img,
    big_img,
    author,
    content
  } = article;

  console.log(article);

  return (
    <>
      <ArticleHeader
        title={title}
        short_description={short_description}
        date={date}
        big_img={big_img}
        author={author}
      />
      {sliceComponentsHelper(content)}
    </>
  );
};

SingleArticleScreenContainer.propTypes = {
  article: PropTypes.shape({
    uid: PropTypes.string,
    title: PropTypes.string,
    categories: PropTypes.string,
    tags: PropTypes.string,
    short_description: PropTypes.string,
    date: PropTypes.string,
    xs_img: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string
    }),
    small_img: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string
    }),
    big_img: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string
    }),
    author: PropTypes.shape({
      uid: PropTypes.string,
      full_name: PropTypes.string,
      short_description: PropTypes.string,
      img_avatar: PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      })
    }),
    content: PropTypes.arrayOf(
      PropTypes.oneOfType([
        //image
        PropTypes.shape({
          type: PropTypes.string,
          width: PropTypes.string,
          image: PropTypes.shape({
            url: PropTypes.string,
            alt: PropTypes.string
          })
        }),
        //text block
        PropTypes.shape({
          type: PropTypes.string,
          description: PropTypes.string,
          size: PropTypes.string,
          special: PropTypes.string,
          text_align: PropTypes.string
        }),
        //code component
        PropTypes.shape({
          type: PropTypes.string,
          code: PropTypes.string
        })
      ])
    )
  })
};

export default React.memo(SingleArticleScreenContainer);
