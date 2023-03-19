import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import format from '../layout/format'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <format>
      <Header />
      <main>Main content</main>
      <Footer />
    </format>
  )
}