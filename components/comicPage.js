import Image from "next/image"
import styles from "./comicPage.module.css"

export default function ComicPage({ comicPage }) {
    const imgSrc = `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/comic-pages/${comicPage}.jpg`
    
    return <Image
        priority
        src = {imgSrc}
        //className={utilStyles.borderCircle}
        height={0}
        width={0}
        sizes="100vw"
        className={styles.image}
    />
}