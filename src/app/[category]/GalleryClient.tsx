"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "../components/Lightbox";
import styles from "./CategoryPage.module.css";

interface GalleryClientProps {
    images: string[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
    const [index, setIndex] = useState(-1);

    const openLightbox = (idx: number) => setIndex(idx);
    const closeLightbox = () => setIndex(-1);
    const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <>
            <div className={styles.gallery}>
                {images.map((src, idx) => (
                    <div key={src} className={styles.masonryItem}>
                        <motion.div
                            layoutId={`image-${idx}`}
                            className={styles.imageCard}
                            onClick={() => openLightbox(idx)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={src}
                                    alt={`Image ${idx + 1}`}
                                    className={styles.image}
                                />
                                <div className={styles.overlayText}>
                                    <span>Vergrößern</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {index >= 0 && (
                    <Lightbox
                        images={images}
                        currentIndex={index}
                        onClose={closeLightbox}
                        onNext={nextImage}
                        onPrev={prevImage}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
