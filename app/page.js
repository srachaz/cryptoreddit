import Image from 'next/image'
import styles from './page.module.css'
import H0me from "./pages/H0me"

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <H0me/>
    </main>
    </>
  )
}
