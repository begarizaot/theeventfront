import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { PaymentRequestPaymentMethodEvent } from "@stripe/stripe-js";

import { useState } from "react";

export const useStripeComplete = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState<any>(null);
  let activeEvent: PaymentRequestPaymentMethodEvent | null = null;

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
            activeEvent = event; // Guardamos el evento para poder rechazarlo después
            resolve(event.paymentMethod.id);
            activeEvent.complete("success");
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

  const confirmCardPayment = async (
    clientSecret: string,
    payment?: { id?: string }
  ): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      if (!stripe) reject("Stripe not available");
      const result = await stripe?.confirmCardPayment(
        clientSecret,
        payment?.id ? { payment_method: payment.id } : undefined
      );

      if (result?.error) {
        reject(
          result.error.type === "invalid_request_error"
            ? "Payment error, please try again"
            : result.error.message
        );
      }

      resolve("Payment success");
    });
  };

  const abortPayment = () => {
    if (activeEvent) {
      activeEvent.complete("fail");
      activeEvent = null;
    }
  };

  const clearPaymentRequest = () => {
    return new Promise((resolve) => {
      setPaymentRequest(null);

      setTimeout(() => {
        resolve(true);
      }, 700);
    });
  };

  return {
    paymentRequest,
    paymentCard,
    abortPayment,
    paymentStripe,
    confirmCardPayment,
    clearPaymentRequest,
  };
};
