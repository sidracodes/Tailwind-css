import '@/styles/globals.css';
import Header from '@/components/shared/Header'; 
import Footer from '@/components/shared/Footer';
export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body>
       <Header/>
        {children}
       <Footer/>
        </body>
    </html>
  )
}
