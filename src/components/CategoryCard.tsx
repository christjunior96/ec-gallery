"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
}

export default function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href} className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={name}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className={styles.overlay}>
            <div className={styles.content}>
              <span className={styles.label}>Kategorie</span>
              <h3 className={styles.title}>{name}</h3>
              <div className={styles.button}>Entdecken</div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
