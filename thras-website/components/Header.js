import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useT } from '../lib/i18n';

const LOCALES = [['en', 'EN'], ['fr', 'FR'], ['nl', 'NL']];

export let externalScrollUpVisible = null;

export function Header() {
    const t = useT().nav;
    const { locale, asPath } = useRouter();
    const langSwitch = (extraClass = '', onClick) => (
        <div className={`${styles.langSwitch} ${extraClass}`} aria-label="Language">
            {LOCALES.map(([code, label]) => (
                <Link key={code} href={asPath} locale={code} onClick={onClick} className={`${styles.langOption} ${code === locale ? styles.langActive : ''}`}>{label}</Link>
            ))}
        </div>
    );
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [scrollUpVisible, setScrollUpVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        externalScrollUpVisible = setScrollUpVisible;
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            setScrollPercentage(scrollPercent > 1 ? 1 : scrollPercent < 0 ? 0 : scrollPercent);
            
            setNavbarScrolled(scrollTop > 50);
            setScrollUpVisible(scrollTop > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    return (
        <>
            {/* Scroll Gauge */}
            <div className={styles.gaugeContainer}>
                <div className={styles.gauge} style={{ width: `${scrollPercentage * 100}%` }}></div>
            </div>

            {/* Navbar */}
            <nav className={`${styles.navbar} ${navbarScrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContainer}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/thras-logo-white.png" alt="" width={28} height={40} priority />
                        <span>Thras</span>
                    </Link>
                    
                    {/* Menu Desktop */}
                    <div className={styles.menuItems}>
                        <Link href="/" className={styles.menuItem}>{t.home}</Link>
                        <Link href="/about" className={styles.menuItem}>{t.about}</Link>
                        <Link href="/expertise" className={styles.menuItem}>{t.expertise}</Link>
                        <Link href="/careers" className={styles.menuItem}>{t.careers}</Link>
                        <Link href="/news" className={styles.menuItem}>{t.news}</Link>
                        <Link href="/contact" className={styles.menuItem}>{t.contact}</Link>
                        {langSwitch()}
                    </div>

                    {/* Burger Button */}
                    <div 
                        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Menu Mobile Overlay */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <Link href="/" className={styles.mobileMenuItem} onClick={handleLinkClick}>{t.home}</Link>
                    <Link href="/about" className={styles.mobileMenuItem} onClick={handleLinkClick}>{t.about}</Link>
                    <Link href="/expertise" className={styles.mobileMenuItem} onClick={handleLinkClick}>{t.expertise}</Link>
                    <Link href="/careers" className={styles.mobileMenuItem} onClick={handleLinkClick}>{t.careers}</Link>
                    <Link href="/news" className={styles.mobileMenuItem} onClick={handleLinkClick}>{t.news}</Link>
                    <Link href="/contact" className={styles.mobileMenuItem} onClick={handleLinkClick}>{t.contact}</Link>
                    {langSwitch(styles.langSwitchMobile, handleLinkClick)}
                </div>
            </div>
        </>
    );
}