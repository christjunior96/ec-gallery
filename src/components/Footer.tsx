import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.footerBrand}>
                        <h3 className="serif">Galerie Christ</h3>
                        <p>&copy; 2025 Alle Rechte vorbehalten.</p>
                    </div>
                    <div className={styles.footerImpressum}>
                        <h4 className="serif">Impressum</h4>
                        <p>Louis Christ</p>
                        <p>Ohmstraße 13</p>
                        <p>35315 Homberg (Ohm)</p>
                        <p>Deutschland</p>
                        <div className={styles.footerContact}>
                            <p>Telefon: <a href="tel:01739409404">0173/9409404</a></p>
                            <p>E-Mail: <a href="mailto:christ.louis96@gmail.com">christ.louis96@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
