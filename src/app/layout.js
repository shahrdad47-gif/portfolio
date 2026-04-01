import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Shahrdad Mahdavi — Full Stack Developer',
  description:
    'Senior Full Stack Developer specializing in React, Node.js, and AWS. Available for freelance and remote work.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-gray-200 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
