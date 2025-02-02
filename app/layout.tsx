import Navbar from './components/Navbar'
import PageFooter from './components/PageFooter'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tali Tech',
    description: 'Where kids learn to code and create',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <html lang="en">
                <body>
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        {children}
                        <PageFooter />
                    </div>
                </body>
            </html>
    )
}