import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { PaymentRequestPaymentMethodEvent } from "@stripe/stripe-js";
import { useState } from "react";

export const useStripeCheck = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState(null);

  const paymentStripe = (total: any) => {
    return new Promise((resolve) => {
      if (stripe) {
        const pr: any = stripe.paymentRequest({
          country: "US",
          currency: "usd",
          total: {
            label: "Total",
            amount: Number((parseFloat(total) * 100).toFixed(0)),
          },
          requestPayerName: true,
          disableWallets: ["link"],
        });

        pr.canMakePayment().then((result: any) => {
          if (result) {
            setPaymentRequest(pr);
          }
        });

        // Maneja el evento de pago
        pr.on(
          "paymentmethod",
          async (event: PaymentRequestPaymentMethodEvent) => {
            resolve(event.paymentMethod.id);
          }
        );
      }
    });
  };

  const paymentCard = () => {
    return new Promise(async (resolve, reject) => {
      if (!stripe) return;

      const cardElement = elements?.getElement(CardNumberElement);
      if (!cardElement) {
        return reject("Select method payment");
      }

      const { error, token } = await stripe.createToken(cardElement);
      if (error) {
        return reject(error.message);
      }
      resolve(token?.id);
    });
  };

  const confirmCardPayment = async (client: any, payment?: any) => {
    return new Promise(async (resolve, reject) => {
      stripe
        ?.confirmCardPayment(
          client,
          payment?.id
            ? {
                payment_method: payment?.id || null,
              }
            : undefined
        )
        .then((result: any) => {
          result?.error
            ? reject(
                result?.error?.type != "invalid_request_error"
                  ? result?.error?.message
                  : "Payment error please try again"
              )
            : resolve("Payment success");
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  };

  return { paymentRequest, paymentStripe, paymentCard, confirmCardPayment };
};
