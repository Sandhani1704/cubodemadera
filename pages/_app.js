import './index.css'
import { Header, Footer } from '../components';
import Head from 'next/head';
import { motion } from 'framer-motion';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {

    return <motion.div className='page' key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
            opacity: 0
        },
        pageAnimate: {
            opacity: 1
        },
    }}>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"></link>
        </Head>
        <Header />
        
            <Component {...pageProps} />
        
        <Footer />
    {/* </div> */}
    </motion.div>
}