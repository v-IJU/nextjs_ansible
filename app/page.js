import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <div className="min-h-screen bg-red-500 text-white flex items-center justify-center">
        Tailwind is Working 🎉
      </div> */}
      <header className={styles.header}>
        <Image
          src="/next.svg"
          alt="Next.js"
          width={90}
          height={20}
          priority
          className={styles.invert}
        />
        <nav className={styles.nav}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Login</a>
        </nav>
      </header>

      <main className={styles.main}>
        <span className={styles.badge}>⚡ Next.js v1</span>

        <h1 className={styles.title}>
          Build beautiful apps
          <br />
          <span>faster than ever</span>
        </h1>

        <p className={styles.subtitle}>
          A modern React framework focused on performance, scalability, and
          developer experience.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#">
            Get Started
          </a>
          <a className={styles.secondary} href="#">
            View Demo
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Next.js V1. All rights reserved.
      </footer>
    </div>
  );
}
