import { useEffect, useRef, useState } from "react";
import { Aside } from "../../reusable/aside"
import { PaypalModal } from "./order";

// Paypal: login: sb-gxso916492022@personal.example.com
// Paypal Password: )?6O]j&F

export const AboDonation = () => {
    const [usage, setUsage] = useState("")
    const [rythm, setRythm] = useState("")
    const paymentValueRef = useRef()
    const [paypalIsOpen, setPaypalIsOpen] = useState(false)

    const buy = (clickedButton, paymentValue) => {
        if(clickedButton === "Donation"){
            if(paymentValue > 1.98){
              setUsage(clickedButton)
              setRythm("Einmalig")
              setPaypalIsOpen(true)
            }
          
        } else if(clickedButton === "Abo"){
          setUsage(clickedButton)
          paymentValueRef.current.value = 4.99
          setRythm("monatlich")
          setPaypalIsOpen(true)
        }
    }

    return (
        <section className="pSection">
            <Aside />
            <article className="pArticle paypalContainer">
                <div className="donationContainer">
                    <h2>Donation</h2>
                    <p>Unterstütze uns doch mit einer Spende für den weiteren Ausbau der Seite.</p>
                    <ul>
                        <li>+ 50MB Speicherplatz</li>
                        <li>Vorteil A (free)</li>
                    </ul>
                    <input type="number" ref={paymentValueRef} defaultValue={4.99} />
                    <button onClick={() => buy("Donation", paymentValueRef.current.value)}>Donation</button>
                </div>
                <div className="aboContainer">
                    <h2>Monats-Abonnement</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <ul>
                        <li>+ 200MB Speicherplatz</li>
                        <li>Vorteil A (free)</li>
                        <li>Vorteil B (free)</li>
                        <li>Vorteil C (free)</li>
                    </ul>
                    <button onClick={() => buy("Abo")}>monatliches Abo</button>
                </div>
                
                <PaypalModal open={paypalIsOpen} paymentValueRef={paymentValueRef} usage={usage} rythm={rythm} onClose={() => setPaypalIsOpen(false)}>
                    <div className="paypalBg" />
                </PaypalModal>
            </article>
        </section>
    )
}