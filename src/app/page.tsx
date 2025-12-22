"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

const categories = [
  { name: "Surreale Kunst", href: "/Surreale Kunst", image: "/Surreale Kunst/0773e547-3097-41ae-bc34-49e49fe60aa3.jpg" },
  { name: "Menschen", href: "/Menschen", image: "/Menschen/IMG_0007-1.jpg" },
  { name: "Landschaften", href: "/Landschaften", image: "/Landschaften/5d3bae24-53b0-42cf-baa7-27421f91b5d2.jpg" },
  { name: "Autos", href: "/Autos", image: "/Autos/IMG_0012-1.jpg" },
  { name: "Stillleben", href: "/Stillleben", image: "/Stillleben/IMG_0008-1.jpg" },
  { name: "Tiere", href: "/Tiere", image: "/Tiere/65aa23ad-b4b4-440f-a704-82f80f671d52.jpg" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.headerImageWrapper}
        >
          <Image
            src="/muehle.jpg"
            alt="Mühle"
            fill
            priority
            className={styles.headerImage}
          />
        </motion.div>

        <div className={styles.headerOverlay}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={styles.mainTitle}
          >
            Galerie Christ
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={styles.titleDivider}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={styles.subtitle}
          >
            Ölgemälde von Erika Christ
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className={styles.scrollIndicator}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel} />
          </div>
        </motion.div>
      </header>

      <main className="container">
        <AnimatedSection className={`${styles.intro} section`}>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <h2 className="serif">Über Erika Christ</h2>
              <div className={styles.textBlock}>
                <p>
                  Sie wurde im Kriegsjahr 1943 in Appenrod/Hessen geboren. </p>
                <p>
                  Kindheit und Jugend verlebte sie auf dem elterlichen Bauernhof. Obwohl ihr Talent früh erkannt wurde, war es in dieser Zeit nicht möglich, sie entsprechend zu fördern.  </p>
                <p>
                  Nachdem sie 1964 geheiratet hatte und zwei Kinder bekam, wurde man schließlich auf sie aufmerksam. Es folgte ein Stipendium am Institut für Graphik und Malerei in Marburg. Das Studium des Zeichnens und der Aktmalerei hat ihr enorm technisch und künstlerisch weiter geholfen. So konnte sie die letzten originalen Trägerinnen in ihrer wunderbar farbigen katholischen Marburger Tracht malen, deren Erhalt ihr immer am Herzen lag. Heute sieht man diese Tracht fast nur noch in Truhen oder bei Folkloreveranstaltungen. </p>
                <p>
                  In der folgenden Zeit gab sie Kurse in Volkshochschulen und machte Ausstellungen, bei denen sie zahlreiche Preise gewann.
                </p>
                <p>
                  Heute lebt Erika Christ mit ihrem Mann in einem schönen alten Mühlenanwesen, dem sie neben der Malerei ihre ganze Kraft widmet.
                </p>
                <p>
                  Seit 2006 hat sie einen ungewöhnlichen Steingarten angelegt.
                </p>
                <p>Im Sommer kommen Besucher von weither, nicht nur, um die Gemäldegalerie zu sehen, sondern auch das romantische Mühlenambiente mit dem Garten zu bewundern. </p>
              </div>
            </div>
            <div className={styles.introImageWrapper}>
              <motion.div
                className={styles.imageFrame}
                initial={{
                  opacity: 0,
                  x: 100,
                  rotate: 10,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  y: -15,
                  boxShadow: "0 30px 60px rgba(92, 64, 51, 0.3)", // Matching --color-brand-primary
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
              >
                <Image
                  src="/erika.JPG"
                  alt="Erika Christ"
                  width={400}
                  height={500}
                  className={styles.introImage}
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <section className="section">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Portfolio</span>
              <h2 className="serif">Entdecken Sie die Werke</h2>
              <p className={styles.sectionSubtitle}>
                Tauchen Sie ein in die verschiedenen Facetten ihrer Malerei.
              </p>
            </div>
          </AnimatedSection>

          <div className={styles.categoryGrid}>
            {categories.map((cat, index) => (
              <AnimatedSection key={cat.href} delay={index * 0.1}>
                <CategoryCard {...cat} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
