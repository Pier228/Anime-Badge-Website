import Image from "next/image";
import Link from "next/link";

const QRCode = () => {
    return (
        <Link href="https://github.com/Pier228" target="_blank">
            <Image src="/qr-code.svg" alt="QRCode" width={80} height={80} />
        </Link>
    );
};

export default QRCode;
