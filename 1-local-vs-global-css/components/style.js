import styles from "./style.module.css";

export default function StyleLayout({children}){
    return <div className={styles.container}>{children}</div>
}