import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Format from '../layout/format'
// components
import Section from '../components/section1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Format>
      <Section></Section>
    </Format>
  )
}