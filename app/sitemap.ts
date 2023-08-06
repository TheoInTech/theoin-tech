// import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
  //   const blogs = allBlogs.map((post) => ({
  //     url: `https://leerob.io/blog/${post.slug}`,
  //     lastModified: post.publishedAt,
  //   }));

  const routes = ["", "/blog", "/guestbook"].map((route) => ({
    url: `https://theindiehacker.tech${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  //   return [...routes, ...blogs];
  return [...routes];
}
