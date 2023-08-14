// import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  //   const blogs = allBlogs.map((post) => ({
  //     url: `https://theindiehacker.tech/blog/${post.slug}`,
  //     lastModified: post.publishedAt,
  //   }));

  const routes = ["", "/works", "/blog"].map((route) => ({
    url: `https://theindiehacker.tech${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  //   return [...routes, ...blogs];
  return [...routes];
}
