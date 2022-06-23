import { createRef, useEffect, useContext } from "react"
import { AppContext } from "../../context/userContext"



export const PaypalModal = ({open, children, paymentValueRef, onClose, usage, rythm}) => {
    const paypal = createRef()
    const {setLogedUserData, logedUserData} = useContext(AppContext)

    useEffect(() => {
        open &&
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    usage: usage,
                    purchase_units: [{
                        
                        amount: {
                            currency_code: "EUR",
                            value: paymentValueRef.current.value,
                        }
                    }]
                })
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture()
              const orderObj = {
                  paypalID: await order.id,
                  status: await order.status,
                  start_date: await order.update_time,
                  kindOfPayment: await usage,
              }
              
              if(orderObj.status === "COMPLETED"){
                console.log(orderObj)
                if(orderObj.kindOfPayment === "Abo"){
                    console.log(logedUserData)
                    console.log(orderObj.group)
                }
              }
            
          // -> DB
            },
            onError: (err) => {
                console.log("PAYPAL-ERROR:", err)
            }
        }).render(paypal.current)
    },[open])

    if (!open) return null

    return (
        <div className="modalBG" ref={paypal}>
            <button className="closeBtn" onClick={onClose}>X</button>
            Zahlungsart: {usage} <br />
            Zahlungshöhe: { paymentValueRef.current?.value > 1.98 ? paymentValueRef.current.value : "Erfüllt nicht den Mindestbetrag" } <br /> 
            Rythmus:  {rythm}<br /><br />
            {children}
        </div>
    )
}