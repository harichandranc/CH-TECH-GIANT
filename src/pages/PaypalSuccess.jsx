import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import SectionWrapper from "../components/SectionWrapper";

function PaypalSuccess() {
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
            <div className="text-6xl mb-4">✅</div>

            <h2 className="text-3xl font-bold text-green-400 mb-4">
              Payment Completed Successfully
            </h2>

            <p className="text-gray-300 mb-6">
              Your PayPal payment has been received successfully.
              Our system is processing your order.
            </p>

            <div className="bg-zinc-900 rounded-xl p-5 text-left mb-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                What's Next?
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>• Your payment has been verified.</li>
                <li>• Your order is being processed.</li>
                <li>• Download access will be provided shortly.</li>
                <li>• A confirmation email may be sent to you.</li>
              </ul>
            </div>

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
              Back to Home
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default PaypalSuccess;