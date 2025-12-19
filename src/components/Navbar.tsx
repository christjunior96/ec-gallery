"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <nav className={`${styles.navbar} ${styles.glass}`}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {!isHome && (
                        <Link href="/" className={styles.backButton}>
                            <motion.span
                                initial={{ x: 0 }}
                                animate={{ x: [0, -4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            >
                                ←
                            </motion.span>
                            <span>Zurück</span>
                        </Link>
                    )}
                    <Link href="/" className={`${styles.logo} serif`}>
                        EC Gallery
                    </Link>
                </div>

                <div className={styles.right}>
                    <a
                        href="mailto:christeerika@icloud.com"
                        className={styles.contactButton}
                    >
                        Kontaktieren
                    </a>
                </div>
            </div>
        </nav>
    );
}
