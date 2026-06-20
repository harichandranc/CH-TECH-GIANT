import { useEffect, useRef, useState } from "react";
import {
  useSearchParams,
  Link,
} from "react-router-dom";

import PageBanner from "../components/PageBanner";
import SectionWrapper from "../components/SectionWrapper";

function PaypalSuccess() {
  const [searchParams] =
    useSearchParams();

  const hasCaptured =
    useRef(false);

  const [loading, setLoading] =
    useState(true);

  const [success, setSuccess] =
    useState(false);

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    if (hasCaptured.current)
      return;

    hasCaptured.current = true;

    const capturePayment =
      async () => {
        try {
          const token =
            searchParams.get(
              "token"
            );

          if (!token) {
            setSuccess(false);

            setMessage(
              "Invalid PayPal order."
            );

            setLoading(false);

            return;
          }

          const response =
            await fetch(
              "https://api.webcodshop.chtechgiant.com/api/payments/paypal/capture-order",
              {
                method: "POST",
                headers: {
                  "Content-Type":
                    "application/json",
                },
                body: JSON.stringify(
                  {
                    orderId:
                      token,
                  }
                ),
              }
            );

          const data =
            await response.json();

          if (
            data.success ||
            data.message ===
              "Order already processed"
          ) {
            setSuccess(true);

            setMessage(
              data.message ||
                "Your PayPal payment has been captured successfully."
            );
          } else {
            setSuccess(false);

            setMessage(
              data.message ||
                "Payment verification failed."
            );
          }
        } catch (error) {
          console.error(
            "PayPal Capture Error:",
            error
          );

          setSuccess(false);

          setMessage(
            "Something went wrong while verifying your payment."
          );
        } finally {
          setLoading(false);
        }
      };

    capturePayment();
  }, [searchParams]);

  return (
    <div className="bg-black text-white min-h-screen">
      <PageBanner
        title="Payment Successful"
        subtitle="Thank you for your purchase."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div
            className="
              rounded-2xl
              border
              p-8
              text-center
              backdrop-blur-sm
              shadow-xl
              bg-white/5
            "
          >
            {loading && (
              <>
                <div className="text-6xl mb-4">
                  ⏳
                </div>

                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                  Verifying Payment...
                </h2>

                <p className="text-gray-300">
                  Please wait while we
                  verify your PayPal
                  payment.
                </p>
              </>
            )}

            {!loading &&
              success && (
                <>
                  <div className="text-6xl mb-4">
                    ✅
                  </div>

                  <h2 className="text-3xl font-bold text-green-400 mb-4">
                    Payment Completed
                    Successfully
                  </h2>

                  <p className="text-gray-300 mb-6">
                    {message}
                  </p>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                    <p className="text-sm text-green-300">
                      Your order has
                      been confirmed.
                      Check your email
                      for purchase
                      details and
                      download
                      instructions.
                    </p>
                  </div>
                </>
              )}

            {!loading &&
              !success && (
                <>
                  <div className="text-6xl mb-4">
                    ❌
                  </div>

                  <h2 className="text-3xl font-bold text-red-400 mb-4">
                    Payment Verification
                    Failed
                  </h2>

                  <p className="text-gray-300 mb-6">
                    {message}
                  </p>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
                    <p className="text-sm text-red-300">
                      If the payment
                      was deducted from
                      your account,
                      please contact
                      support with your
                      PayPal transaction
                      details.
                    </p>
                  </div>
                </>
              )}

            <Link
              to="/"
              className="
                inline-block
                px-6
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                transition
                font-semibold
              "
            >
              Back To Home
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default PaypalSuccess;