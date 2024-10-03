import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

//TODO: add publishable key
const stripPromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please Pay" />

      <div>
        <Elements stripe={stripPromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
