import { Startpanel } from "./startpanel"
import { About } from "./about"
import { Membership } from "./membership"

export const Home = () => {
    return (
        <section> {/*Section = Seite*/}
            <Startpanel /> {/*Seiten Aufbau in Components*/}
            <About />
            <Membership />
        </section>
    )
}