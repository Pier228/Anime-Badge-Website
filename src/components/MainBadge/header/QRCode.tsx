import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/mainBadge/main-badge-header.module.scss'

const QRCode = () => {
    return (
        <Link href="https://github.com/Pier228" target="_blank" className={styles.qr_border}>
            <Image src="/qr-code.svg" alt="QRCode" width={80} height={80} />
        </Link>
    );
};

export default QRCode;
