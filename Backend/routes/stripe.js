const router = require("express").Router();
const Stripe = require("stripe");

require('dotenv').config()

const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {

  const line_items = req.body.cartItem.map(item=>{
    return{
      price_data: {
        currency: "inr",
        product_data: {
          name: item.title,
          description: item.desc,
          images: [item.img],
          metadata:{
            id:item._id,
            size: item.size,
            color: item.color,
          },
        },
        unit_amount: item.price * 100,
      }, 
      quantity:item.qty,
      };
  });
//   req.body.cartItem.map(item=>{
//    console.log(item);
// })

  const session = await stripe.checkout.sessions.create({
    line_items, 
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({ url: session.url });
});

module.exports = router;

// const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// router.post("/payment", (req, res) => {
//   stripe.charges.create(
//     {
//       source: req.body.tokenId,
//       amount: req.body.amount,
//       currency: "usd",
//     },
//     (stripeErr, stripeRes) => {
//       if (stripeErr) {
//         res.status(500).json(stripeErr);
//       } else {
//         res.status(200).json(stripeRes);
//       }
//     }
//   );
// });

// module.exports = router;
