import Header from "src/components/Header";
import Footer from "src/components/Footer";
import styles from "./layout.module.scss";


const Layout: React.FC = ({children}) => {
    return (
        <main className={styles.layout}>
            <Header />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
