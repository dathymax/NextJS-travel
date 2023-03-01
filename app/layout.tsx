import Navigation from '@/components/navigation/Navigation';
import './globals.css'

export const metadata = {
    title: 'Travel Social Network',
    description: 'Travel Social Network',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </head>
            <body className="md:container m-auto">
                <Navigation />
                <div className="pt-20">
                    {children}
                </div>
            </body>
        </html>
    )
}
