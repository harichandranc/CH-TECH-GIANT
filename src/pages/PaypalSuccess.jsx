import { useEffect, useState } from "react";
import {
  useSearchParams,
  Link,
} from "react-router-dom";

import PageBanner from "../components/PageBanner";
import SectionWrapper from "../components/SectionWrapper";

function PaypalSuccess() {
  const [searchParams] =
    useSearchParams();

  const [loading, setLoading] =
    useState(true);

  const [success, setSuccess] =
    useState(false);

  useEffect(() => {
    const capturePayment =
      async () => {
        try {
          const token =
            searchParams.get(
              "token"
            );

          if (!token) {
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
                body: JSON.stringify({
                  orderId: token,
                }),
              }
            );

          const data =
            await response.json();

          console.log(data);

          alert(
            JSON.stringify(data)
          );

          if (
            data.success
          ) {
            setSuccess(true);
          }

          setLoading(false);
        } catch (error) {
          console.error(error);
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
              border border-green-500/20
              bg-green-500/5
              p-8
              text-center
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
              </>
            )}

            {!loading &&
              success && (
                <>
                  <div className="text-6xl mb-4">
                    ✅
                  </div>

                  <h2 className="text-3xl font-bold text-green-400 mb-4">
                    Payment Completed Successfully
                  </h2>

                  <p className="text-gray-300 mb-6">
                    Your PayPal payment has been captured successfully.
                  </p>
                </>
              )}

            {!loading &&
              !success && (
                <>
                  <div className="text-6xl mb-4">
                    ❌
                  </div>

                  <h2 className="text-3xl font-bold text-red-400 mb-4">
                    Payment Verification Failed
                  </h2>
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