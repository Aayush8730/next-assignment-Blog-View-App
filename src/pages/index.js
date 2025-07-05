import { Geist, Geist_Mono } from "next/font/google";
import Layout from '../components/Layout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
        <h1>This is a News Blog website</h1>
        <h2>Vist Posts to read latest news ... </h2>
    </Layout>
  );
}
