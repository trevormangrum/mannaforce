import { createClient } from "contentful-management";
import { BlogPost } from "utils/types";
const client = createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export const addBlogPost = async (blogPost: BlogPost) => {
    const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
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


/**
 * @param ID ID of the Contentful Asset to be deleted.
 */
 export async function deleteBlogPost(ID: string) {
  const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string);
  const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
  const asset = await environment.getAsset(ID);

  //Before an asset can be deleted, it has to be unpublished.
  await asset.unpublish();
  await asset.delete();
}
/**
 * 
 * @param blogPost the BlogPost object to be updated
 */
export async function updateBlogPost(blogPost: BlogPost) {
  const space = await client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string);

  const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
  const entry = await environment.getEntry(blogPost.sys?.id as string);

  entry.fields.title["en-US"] = blogPost.title ? blogPost.title : entry.fields.title["en-US"];
  entry.fields.date["en-US"] = entry.fields.date["en-US"];
  entry.fields.author["en-US"] = blogPost.author ? blogPost.author : entry.fields.author["en-US"];
  entry.fields.text["en-US"] = blogPost.text ? blogPost.text : entry.fields.text["en-US"];
  await entry.update();
}