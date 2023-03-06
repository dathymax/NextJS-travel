import Footer from '@/components/footer';
import Navigation from '@/components/header';
import './globals.css'
import { Poppins } from "next/font/google";
import Theme from '@/components/theme';

const inter = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal"],
    subsets: ["latin"]
})

export const metadata = {
    title: 'Travel template',
    description: 'Travel template',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <body className={`${inter.className} md:container m-auto`}>
                <Theme />
                <Navigation />
                <div className="pt-20">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
