import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import type { Metadata } from "next/types";
import "./index.scss";

export const metadata: Metadata = {
    title: "Main page",
    description: "Create your own anime badge",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <StoreProvider>
                <body className={inter.className}>{children}</body>
            </StoreProvider>
        </html>
    );
}
