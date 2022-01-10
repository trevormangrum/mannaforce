export default {
    baseUrl: process.env.NODE_ENV === "production" ? "https://mannaforce.org" : "http://localhost:3000",
    links: {
        home: {
            pathName: "Home",
            path: "/",
        },
        about: {
            pathName: "About Us",
            path: "/about",
        },
        contact: {
            pathName: "Contact Us",
            path: "/contact",
        },
        blog: {
            pathName: "Blog",
            path: "/blog",
        },
/*         testimonials: {
            pathName: "Testimonials",
            path: "/testimonials",
        }, */
        donate: {
            pathName: "Donate",
            path: "/donate",
        }
    }
}