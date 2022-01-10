import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { addBlogPost, updateBlogPost } from "server/actions/Contentful/modify";
import { BlogPost } from "utils/types";
export const config = {
    api: {
        bodyParser: false,
    },
};

export default withApiAuthRequired(async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if(req.method === "POST") {
            //Creating a new blog post
            const form = new formidable.IncomingForm();
            //Parse the form data
            form.parse(req, async(err: string, fields: formidable.Fields, files: formidable.Files) => {
                const blogPost: BlogPost = fields;
                console.log(fields);

                blogPost.date = new Date();
                await addBlogPost(blogPost);
                res.status(200).json({
                    payload: {},
                });
                return;
            })
        } else if (req.method === "PATCH") {
            //Updating a new blog post
            const form = new formidable.IncomingForm();
            //Parse the form data
            form.parse(req, async(err: string, fields: formidable.Fields, files: formidable.Files) => {
                const blogPost: BlogPost = {
                    sys: {
                        id: fields.id,

                    },
                    title: fields.title,
                    author: fields.author,
                    text: fields.text,
                };

                console.log("blog Post: ", blogPost);
                blogPost.date = new Date();
                await updateBlogPost(blogPost);
                res.status(200).json({
                    payload: {},
                });
                return;
            })
        } else if (req.method === "DELETE") {
            //Delete a blog post
            console.log(req.query.id);
            res.status(200).json({
                payload: {},
            });
            return;
        }
    } catch (error) {
        res.status(500).json({
            payload: error,
        })
    }
})