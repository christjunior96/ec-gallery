"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import styles from "./CategoryHeader.module.css";

interface CategoryHeaderProps {
    title: string;
}

export default function CategoryHeader({ title }: CategoryHeaderProps) {
    return (
        <header className={styles.header}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className={styles.bgText}
            >
                {title}
            </motion.div>

            <div className={`${styles.content} container`}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className={styles.backLinkWrapper}
                >
                    <Link href="/" className={styles.backLink}>
                        <ChevronLeft size={16} />
                        Zurück
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.title}
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className={styles.divider}
                />
            </div>
        </header>
    );
}
