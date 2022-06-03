import { useref, useEffect } from "react"

export const PaypalModal = ({open, children, paymentValueRef, onClose, usage}) => {
    if (!open) return null

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
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
              console.log("Successful order:", order.status)
              const orderObj = {
                  paypalID: await order.id,
                  status: await order.status,
                  start_date: await order.update_time,
                  kindOfPayment: await usage,
              }
              console.log(orderObj)
            
          // -> DB
            },
            onError: (err) => {
                console.log("PAYPAL-ERROR:", err)
            }
        }).render(paypal.current)
    },[])

    return (
        <div className="modalBG">
            <button className="closeBtn" onClick={onClose}>X</button>
            {children}
        </div>
    )
}