import { useEffect, useRef, useState } from "react";
import { Aside } from "../../reusable/aside"
import { PaypalModal } from "./order";

// Paypal: login: sb-gxso916492022@personal.example.com
// Paypal Password: )?6O]j&F


export const AboDonation = () => {
    const [usage, setUsage] = useState("")
    const [rythm, setRythm] = useState("")
    //const [paymentValue, setPaymentValue] = useState(4.99)
    const paymentValueRef = useRef()
    const paypal = useRef()
    const [paypalIsOpen, setPaypalIsOpen] = useState(false)

    const buy = (clickedButton, paymentValue) => {
        if(clickedButton === "Donation"){
            console.log(typeof paymentValue, paymentValue)
            if(paymentValue > 1.98){
              setUsage(clickedButton)
              //setPaymentValue(paymentValue)
              setRythm("Einmalig")
              setPaypalIsOpen(true)
            }
            //else{
            //   setPaymentValue("Erfüllt nicht die Mindestsumme.")
            // }
          
        } else if(clickedButton === "Abo"){
          setUsage(clickedButton)
          //setPaymentValue(4.99)
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
                    <input type="number" ref={paymentValueRef} defaultValue={4.99}/>
                    <button onClick={() => buy("Donation", paymentValueRef.current.value)}>Donation</button>
                </div>
                <div className="aboContainer">
                    <h2>Monats-Abonnement</h2>
                    <p>Lorem rupti.</p>
                    <ul>
                        <li>+ 200MB Speicherplatz</li>
                        <li>Vorteil A (free)</li>
                        <li>Vorteil B (free)</li>
                        <li>Vorteil C (free)</li>
                    </ul>
                    <button onClick={() => buy("Abo")}>monatliches Abo</button> 
                </div>
                
                <PaypalModal open={paypalIsOpen} paymentValue={paymentValueRef} onClose={() => setPaypalIsOpen(false)}>
                <div className="paypalBg" />
                </PaypalModal>
                
                
            </article>
        </section>
    )
}