import React from 'react';

interface ArticleProps {
  content: string;
  title: string;
}

const Article = (props: ArticleProps) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </article>
  );
};

export default Article;
