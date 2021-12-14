import {gql} from "@apollo/client"
export default {
    blogPosts:{ 
        getAllPosts: gql`
            query getAllPosts {
                blogPostCollection(order: [date_DESC]) {
                    items {
                        sys {
                            id
                        }
                        title
                        author
                        date
                        text
                    }
                } 
            }
    `,
    getPost: gql`
        query getPostById($id: String!) {
            blogPostCollection(where: {sys: {id: $id}}, limit: 1) {
                items {
                    title
                    author
                    date
                    text
                }
            }
        }
    `
    }
};