import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";

export const metadata: Metadata = {
	title: "Spaghettitown",
	description: "Spaghettitown web application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			</head>
			<body>
				<MantineProvider>{children}</MantineProvider>
			</body>
		</html>
	);
}
