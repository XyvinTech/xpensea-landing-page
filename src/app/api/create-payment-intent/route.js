import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const getPriceAmount = (plan, billingCycle) => {
    const prices = {
        basic: {
            monthly: 2999, // $29.99
            yearly: 29990, // $299.90
        },
        pro: {
            monthly: 4999, // $49.99
            yearly: 49990, // $499.90
        },
        enterprise: {
            monthly: 49999, // $499.99
            yearly: 499990, // $4,999.90
        },
    };

    return prices[plan]?.[billingCycle] || 0;
};

export async function POST(request) {
    try {
        const { plan, billingCycle } = await request.json();

        // Calculate the amount based on the plan and billing cycle
        const amount = getPriceAmount(plan, billingCycle);

        if (!amount) {
            return NextResponse.json(
                { error: "Invalid plan or billing cycle" },
                { status: 400 }
            );
        }

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
            metadata: {
                plan,
                billingCycle,
            },
        });

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        return NextResponse.json(
            { error: "Error creating payment intent" },
            { status: 500 }
        );
    }
} 