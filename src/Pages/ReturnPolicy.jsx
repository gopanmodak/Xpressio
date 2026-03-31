import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-mono">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl text-center font-bold font-sans mb-6">
        Refund Policy
      </h1>

      {/* Section 1 */}
      <h2 className="text-xl sm:text-2xl font-bold mt-5">
        When Refunds Are Applicable
      </h2>

      <p className="my-4 text-sm sm:text-base leading-relaxed">
        At Xpressio, we are committed to ensuring customer satisfaction. We
        offer refunds under the following circumstances:
      </p>

      <ul className="list-disc ml-5 space-y-3 text-sm sm:text-base leading-relaxed">
        <li>
          <strong>Order cancelled before shipment –</strong> If a customer cancels the order
          before it has been handed over to the shipping carrier, a full refund
          is processed immediately. No shipping fees apply since the order has
          not yet been dispatched.
        </li>

        <li>
          <strong>Replacement not available in stock –</strong> When a customer requests a
          replacement for a defective, damaged, or incorrect item, but the same
          product is no longer available in stock, a full refund is provided
          instead. The refund is processed after the returned item is received
          and inspected.
        </li>

        <li>
          <strong>Return approved after inspection –</strong> For returns that require quality
          review—such as items damaged upon arrival, wrong products sent, or
          quality-related issues—the item must first be sent back and inspected
          by our quality assurance team. Once the return is approved (typically
          within 3–5 business days after receipt), a full refund is issued to
          the original payment method.
        </li>

        <li>
          <strong>Order cancelled by Xpressio –</strong> If Xpressio cancels an order due to
          reasons such as payment verification issues, stock unavailability
          after purchase, or suspected fraudulent activity, a full refund is
          automatically processed without requiring any action from the
          customer.
        </li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl sm:text-2xl font-bold mt-8">
        Refund Methods
      </h2>

      <p className="my-4 text-sm sm:text-base leading-relaxed">
        Refunds are processed through the following methods:
      </p>

      <ul className="list-disc ml-5 space-y-3 text-sm sm:text-base leading-relaxed">
        <li>
          <strong>Original payment method –</strong> The refund amount is credited back to
          the credit/debit card, mobile banking account, or bank account that
          was originally used to make the purchase.
        </li>

        <li>
          <strong>Store wallet (optional for faster refunds) –</strong> Customers may choose
          to receive their refund as store credit (Xpressio wallet), which is
          usually faster and can be used instantly for future purchases.
        </li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl sm:text-2xl font-bold mt-8">
        Refund Processing Time
      </h2>

      <ul className="list-disc ml-5 mt-4 space-y-3 text-sm sm:text-base leading-relaxed">
        <li>
          <strong>Wallet refunds –</strong> Instant to 24 hours after approval.
        </li>
        <li>
          <strong>Mobile banking –</strong> 1–3 business days depending on the provider.
        </li>
        <li>
          <strong>Card payments –</strong> 5–10 business days depending on the issuing bank.
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl sm:text-2xl font-bold mt-8">
        Shipping & Delivery Charges
      </h2>

      <p className="mt-4 text-sm sm:text-base leading-relaxed">
        Original shipping fees are non-refundable unless the return or
        cancellation is due to an error on Xpressio’s part (such as wrong or
        damaged items). Reverse pickup may be free or chargeable depending on
        the situation. Express delivery charges are non-refundable unless the
        delay or issue was caused by Xpressio.
      </p>

      {/* Section 5 */}
      <h2 className="text-xl sm:text-2xl font-bold mt-8">
        Fraud Prevention & Policy Abuse
      </h2>

      <p className="mt-4 text-sm sm:text-base leading-relaxed">
        Xpressio reserves the right to deny refunds or replacements in cases of
        suspected fraud, misuse, or excessive return behavior. Accounts showing
        unusual activity may be suspended. Legal action may be taken in severe
        cases involving fraud or identity misuse.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl sm:text-2xl font-bold mt-8">
        Customer Support
      </h2>

      <ul className="list-disc ml-5 mt-4 space-y-2 text-sm sm:text-base">
        <li>Email: support@xpressio.com</li>
        <li>Support Hours: 9:00 AM – 9:00 PM (Daily)</li>
      </ul>

      <p className="mt-2 text-sm sm:text-base leading-relaxed">
        Our support team is available seven days a week, including weekends and
        public holidays.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl sm:text-2xl font-bold mt-8">
        Policy Updates
      </h2>

      <p className="mt-4 text-sm sm:text-base leading-relaxed">
        Xpressio reserves the right to update or modify this policy at any time.
        Changes become effective immediately upon posting. Continued use of our
        services means you accept the updated policy.
      </p>

      {/* Footer */}
      <p className="mt-8 mb-4 text-sm sm:text-base leading-relaxed">
        At Xpressio, customer satisfaction is our priority. We aim to resolve
        every issue quickly, fairly, and transparently — ensuring you always
        shop with confidence. Thank you for choosing Xpressio.
      </p>

    </div>
  );
};

export default ReturnPolicy;