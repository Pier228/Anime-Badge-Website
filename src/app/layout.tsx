"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.scss";
import StoreProvider from "./StoreProvider";
import { TerminalContextProvider } from "react-terminal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anime Badge",
    description: "Create your own anime badge",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <StoreProvider>
                <TerminalContextProvider>
                    <body className={inter.className}>{children}</body>
                </TerminalContextProvider>
            </StoreProvider>
        </html>
    );
}
