import './index.css'
import { Header, Footer } from '../components';
// This default export is required in a new `pages/_app.js` file.
import Image from 'next/image'
export default function MyApp({ Component, pageProps }) {

    return <div className='page' >
        
        <Header />
        {/* <Image
            alt="background"
            src="/mainBackground.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            className='pic'
        /> */}
        <Component {...pageProps} />
        <Footer />
    </div>

}