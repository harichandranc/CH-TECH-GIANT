import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import SectionWrapper from "../components/SectionWrapper";

function PaypalCancel() {
  return (
    <div className="bg-black text-white min-h-screen">
      <PageBanner
        title="Payment Cancelled"
        subtitle="Your PayPal payment was not completed."
      />

      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <div
            className="
              rounded-2xl
              border border-red-500/20
              bg-red-500/5
              p-8
              text-center
            "
          >
            <div className="text-6xl mb-4">❌</div>

            <h2 className="text-3xl font-bold text-red-400 mb-4">
              Payment Cancelled
            </h2>

            <p className="text-gray-300 mb-6">
              Your PayPal payment was cancelled or interrupted before
              completion. No charges have been made to your account.
            </p>

            <div className="bg-zinc-900 rounded-xl p-5 text-left mb-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                What You Can Do Next
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>• Try completing the payment again.</li>
                <li>• Verify your PayPal account details.</li>
                <li>• Check your internet connection.</li>
                <li>• Contact support if the issue continues.</li>
              </ul>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-cyan-500
                  hover:bg-cyan-600
                  transition
                  font-semibold
                "
              >
                Back to Home
              </Link>

              <Link
                to="/products"
                className="
                  px-6
                  py-3
                  rounded-xl
                  border border-zinc-700
                  hover:border-cyan-500
                  transition
                  font-semibold
                "
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default PaypalCancel;