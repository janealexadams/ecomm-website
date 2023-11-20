const Stripe = require('stripe')
const express = require('express')
// env with stripe key
require("dotenv")
const stripe = Stripe(process.env.STRIPE_KEY)
const router = express.Router()


// Payment for Stripe creating sessions for checkout
router.post('/create-checkout-session', async (req, res) => {
    const session = await Stripe.checkout.sessions.create({
      line_items:[
        {
          price_data: {
            currency: 'usd', 
            product_data: {
              name: 'T-shirt', 
            },
            unit_amount: 2000,
          },
        quantity: 1,
        },
      ],
      mode: 'payment', 
      success_url: '/success', 
      cancel_url: '/',
    });

    res.send({url: session.url})
    console.log(session.url)
  })

module.exports = router;