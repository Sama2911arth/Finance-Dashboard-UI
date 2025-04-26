/**
 * Root Layout Component
 * 
 * This is the main layout component that wraps all pages in the application.
 * It sets up the HTML structure, head elements, and imports global styles.
 */
import type { Metadata } from 'next'
import './globals.css'

/**
 * Metadata for the application
 * 
 * Defines the title and description for all pages.
 * This will be used for SEO and browser tabs.
 */
export const metadata: Metadata = {
    title: 'Franchise Dashboard',
    description: 'Franchise Management Dashboard',
}

/**
 * RootLayout Component
 * 
 * Provides the HTML structure for the entire application.
 * Imports Google Fonts for the DM Sans font used throughout the app.
 * 
 * @param children - The page content to render inside the layout
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* Import Google Fonts for DM Sans */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    )
} 