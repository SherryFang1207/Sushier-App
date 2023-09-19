const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const params = {
        // submit_type: "pay",
        // mode: "payment",
        // payment_method_types: ["card"],
        // billing_address_collection: "auto",
        // shipping_options: [
        //   { shipping_rate: "shr_1NrtScB2w3BqLLRDI2pRUBPm" }, // FREE DELIVER
        //   { shipping_rate: "shr_1NrtReB2w3BqLLRDUc28WeKB" }, // FAST DELIVER: $5
        // ],
        line_items: [
          //   req.body.map((item) => {
          //     return {
          //       price_data: {
          //         currency: "usd",
          //         product_data: {
          //           name: item.name,
          //           //   images: [item.img_public_url],
          //         },
          //         unit_amount: item.price * 100,
          //       },
          //       adjustable_quantity: {
          //         enabled: true,
          //         minimum: 1,
          //       },
          //       quantity: item.quantity,
          //     };
          //   }),
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 2,
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };
      console.log("ready to send data to stripe...");
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      console.log("logging session data...");
      console.log(session);
      //   res.status(200).json(session);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
