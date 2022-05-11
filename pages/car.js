import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {format} from 'date-fns'

function Car() {
    return(
        
        <div>
            <Header />
            <img src="https://i.pinimg.com/originals/fc/5e/6f/fc5e6f94b4c59d2b1e57dfea9feaef16.jpg" />
        </div>
    )
}

export default Car;