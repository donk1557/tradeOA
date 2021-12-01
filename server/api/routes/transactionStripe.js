const router = require('express').Router();
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

router.post('/payment', (req, res)=> {
    stripe.charge.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        }
    );
});

router.post('/paymentintent', async (req, res)=> {
    const {paymentMethod, currency, amount} = req.body;
    try{
   const payIntent = await stripe.paymentIntents.create(
        {
            
            amount: amount,
            currency: currency,
            payment_method_types: [paymentMethod],
        }
    );
    }catch(err) {
        res.json(err);
    }
    res.json({ clientSecret: payIntent.client_secret });
});


module.exports = router;