import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export const useStripeComplete = () => {
  const stripe = useStripe();
  const elements = useElements();

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
  
  return {
    paymentCard,
  };
};
