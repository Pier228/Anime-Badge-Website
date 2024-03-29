import type { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Settings",
    description: "Create your own anime badge",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
