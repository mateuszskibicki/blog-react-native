import React from "react";
import PropTypes from "prop-types";
import ArticleHeader from "../article/ArticleHeader";
import ArticleFooter from "../article/ArticleFooter";
import { sliceComponentsHelper } from "../../helpers/slice-helpers/SliceComponentsHelpers";
import ArticlesHorizontalList from "../articles/ArticlesHorizontalList";

const SingleArticleScreenContainer = ({ article, lastThreeArticles } = {}) => {
  if (!article) return null;

  const {
    title,
    categories,
    tags,
    short_description,
    date,
    big_img,
    author,
    content
  } = article;

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
      <ArticleFooter categories={categories} tags={tags} author={author} />
      {lastThreeArticles && (
        <ArticlesHorizontalList
          title="Last 3 articles:"
          articles={lastThreeArticles}
        />
      )}
    </>
  );
};

SingleArticleScreenContainer.propTypes = {
  lastThreeArticles: PropTypes.array,
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
      image_avatar: PropTypes.shape({
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
