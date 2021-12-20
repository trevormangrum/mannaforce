import React from "react";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { Delta, Sources } from "quill";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });

interface IFormValues {
    title?: string | undefined;
    author?: string | undefined;
    text: string | undefined;
    submissionError?: boolean | undefined;
    error?: boolean | undefined;
    [key: string]: string | null | boolean | undefined;
}


const CreateBlogPostForm: React.FC = () => {
    const [values, setValues] = React.useState({} as IFormValues); //Used to store the various values that will be sent to the backend.
    const[loading, setLoading] = React.useState(false);
    const handleSubmit = async (e: React.SyntheticEvent) => {
        //There's no way to put a required tag on the quill editor, so we just check to make sure there's input in it before submitting.
        e.preventDefault();
        //Clear the submission error
        if (values.submissionError) {
            setValues({ ...values, ["submissionError"]: false });
        }

        if (!values.text) {
            setValues({ ...values, ["error"]: true });
            return;
        }

        // done error checking, send form to backend
        const fd = new FormData();
        let key: string;
        setLoading(true);
        for (key in values) {
            if (typeof values[key] === "string") {
                fd.append(key, values[key] as string);
            } 
        }
        const response = await fetch("/api/blog", {
            method: "POST",
            body: fd,
        });
        if(response.status == 200) {
            window.location.reload();
      } else {
        setValues({ ...values, ["submissionError"]: true });
      }
    }
    const handleData = (e: React.SyntheticEvent) => {
        e.persist();
        const target = e.target as HTMLInputElement;
        if (target != null) {
            setValues(values => ({
                ...values,
                [target.name]: target.value,
            }));
        }
    };
    //From mindversity: https://github.com/hack4impact-utk/mindversity-website/blob/develop/components/CreateJournalEntry/index.tsx
    const handleChange = (content: string, delta: Delta, source: Sources, editor: any) => {
        //If the editor is empty, the only thing in it is a newline character. We don't want to send just newlines to the backend, so we do this.
        if (editor.getText() != "\n") {
            if (values.text) {
                delete values.error;
            }
            setValues(values => ({ ...values, ["text"]: editor.getHTML() }));
        } else {
            delete values.text;
        }
    };

    return (
        <form className={styles.container}>
            <h1 className={styles.title}>Create Blog Post</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="Post title" onChange={handleData} value={values.title || ""}/>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" placeholder="Author" onChange={handleData} value={values.author || ""}/>
            <label htmlFor="text">Post Content</label>
            <ReactQuill theme="snow" className={styles.editor} placeholder="Please type your blog post here..." onChange={handleChange}/>
            {values.error && (
                <p>Please fill out the blog post body.</p>
            )}
            <button className={styles.submitBtn} onClick={handleSubmit}>Create Blog Post</button>
            {values.submissionError && (
                <p>There was an error submitting your post. Please try again.</p>
            )}
        </form>
    );
}
export default CreateBlogPostForm;