import { createClient } from "contentful-management";
import { BlogPost } from "utils/types";
const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const addBlogPost = async (blogPost: BlogPost) => {
    const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string);
    const environment = await space.getEnvironment("master");
    const newBlogPost = await environment.createEntry("blogPost", {
      fields: {
        title: {
          "en-US": blogPost.title,
        },
        author: {
          "en-US": blogPost.author,
        },
        date: {
          "en-US": blogPost.date,
        },
        text: {
          "en-US": blogPost.text,
        },
      },
    });
    await newBlogPost.publish();
    if (!newBlogPost) throw new Error("Error creating new article.");
  };