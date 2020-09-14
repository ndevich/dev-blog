import React from 'react';
import office from '../../static/images/office.jpg';
import posts, { Post } from './posts';
import '../views.css';

const BlogPost = (props: {
  post: Post;
  blogKey: string;
  isOpen: boolean;
  open: (key: string) => void;
  close: () => void;
}) => {
  const { post, blogKey, isOpen, open, close } = props;
  const openBody = React.useCallback(() => open(blogKey), [open, blogKey]);
  const closeBody = React.useCallback(() => close(), [close]);

  return (
    <div className="blog-wrapper">
      <div onClick={openBody}>
        <div className="blog-title">{props.post.title} </div>
        <div
          className="blog-summary"
          dangerouslySetInnerHTML={{ __html: post.summary }}
        />
      </div>
      {isOpen ? (
        <div className="blog-body">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className="blog-close" onClick={closeBody}>
            Close
          </div>
        </div>
      ) : null}
    </div>
  );
};

const BlogWriter = () => {
  const hash = window.location.hash.slice(1);
  const [currentOpen, setCurrentOpen] = React.useState<string | null>(hash);
  const setCurrent = React.useCallback(
    (blogKey: string) => {
      window.location.hash = blogKey;
      setCurrentOpen(blogKey);
    },
    [setCurrentOpen]
  );
  return (
    <div className="blog-list">
      {Object.keys(posts).map((p: string, index: number) => (
        <BlogPost
          isOpen={currentOpen === p}
          open={(key) => setCurrent(key)}
          close={() => setCurrent('')}
          blogKey={p}
          post={(posts as any)[p]}
        />
      ))}
    </div>
  );
};

const News = (): JSX.Element => (
  <div className="page">
    <div className="header">
      <div className="header-image">
        <img alt="news-header" src={office} />
      </div>
      <div className="header-text">News</div>
    </div>
    <div>
      <BlogWriter />
    </div>
  </div>
);

export default News;
