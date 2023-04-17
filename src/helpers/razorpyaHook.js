import React from 'react'

const razorpyaHook = async(props) => {

    console.log(props, "props   in hook")

    const amount = props;
    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement('script')
          script.src = src
    
          script.onload = () => {
            resolve(true)
          }
           script.onerror = () => {
            resolve(false)
           }
    
           document.body.appendChild(script)
        })
      }

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("You are Offline! failed to load.")
      return
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_TEST_ID,
      currency: "INR",
      amount: amount * 100,
      name: "Lucky fingers",
      description: "Thanks for the recharge!",

      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert("payment successful!")
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open();

}

export default razorpyaHook
