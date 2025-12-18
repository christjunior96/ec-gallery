"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

interface LightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        },
        [onNext, onPrev]
    );

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (currentIndex !== -1) {
            if (!dialog.open) {
                dialog.showModal();
            }
            window.addEventListener("keydown", handleKeyDown);
        } else {
            dialog.close();
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex, handleKeyDown]);

    // Handle dialog close (e.g., from Escape key)
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };

        dialog.addEventListener("cancel", handleCancel);
        return () => dialog.removeEventListener("cancel", handleCancel);
    }, [onClose]);

    if (currentIndex === -1) return null;

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            onClick={(e) => {
                if (e.target === dialogRef.current) onClose();
            }}
        >
            <button className={styles.closeButton} onClick={onClose} aria-label="Schließen">×</button>

            <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Vorheriges Bild"
            >
                ‹
            </button>

            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.imageContainer}>
                    <Image
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        fill
                        className={styles.image}
                        priority
                        sizes="100vw"
                    />
                </div>
                <div className={styles.info}>
                    <span className={styles.counter}>{currentIndex + 1} / {images.length}</span>
                </div>
            </div>

            <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Nächstes Bild"
            >
                ›
            </button>
        </dialog>
    );
}
