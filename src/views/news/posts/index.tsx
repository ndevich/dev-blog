export interface Post {
  title: string;
  summary: string;
  body: string;
}

// Add new blog posts to the top of the list here
const posts: { [key: string]: Post } = {
  'new-post': {
    ...require(`./new-post.json`),
    body: require(`./new-post.html`),
  },
  '9-15-20': { ...require(`./9-15-20.json`), body: require(`./9-15-20.html`) },
  '9-14-20': { ...require(`./9-14-20.json`), body: require(`./9-14-20.html`) },
  '9-13-20': { ...require(`./9-13-20.json`), body: require(`./9-13-20.html`) },
};

export default posts;
