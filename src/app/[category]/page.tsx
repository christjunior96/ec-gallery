import fs from "fs";
import path from "path";
import Link from "next/link";
import styles from "./CategoryPage.module.css";
import GalleryClient from "./GalleryClient";
import CategoryHeader from "@/components/CategoryHeader";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

interface PageProps {
    params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;

    // Decoded category name for display
    const displayName = decodeURIComponent(category);

    // Path to the category folder in public
    const categoryPath = path.join(process.cwd(), "public", displayName);

    let images: string[] = [];

    if (fs.existsSync(categoryPath)) {
        const files = fs.readdirSync(categoryPath);
        images = files
            .filter(file => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
            .map(file => `/${displayName}/${file}`);
    }

    return (
        <div className={styles.page}>
            <CategoryHeader title={displayName} />

            <main className="container section">
                <AnimatedSection>
                    {images.length > 0 ? (
                        <GalleryClient images={images} />
                    ) : (
                        <div className={styles.empty}>
                            <p>In dieser Kategorie wurden noch keine Bilder hochgeladen.</p>
                            <Link href="/" className="serif">Zurück zur Startseite</Link>
                        </div>
                    )}
                </AnimatedSection>
            </main>

            <Footer />
        </div>
    );
}
