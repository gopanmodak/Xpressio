import React from 'react'

const Privacy = () => {
  return (
        <div className="max-w-6xl mx-auto border mb-10 border-zinc-300 p-3 shadow-lg bg-white">
      {/* Header with image and title */}
      <div className="flex flex-col gap-5 justify-center items-center bg-zinc-200 pb-5">
        <img
          src="https://d86vad5pql9wj.cloudfront.net/uploads/Main%20banner%20(1).png"
          alt="Xpressio banner"
          className="w-full object-cover"
        />
        <h1 className="text-3xl font-bold font-sans text-red-600">
          Privacy Policy
        </h1>
      </div>

      {/* Privacy Policy Content */}
      <div className="px-4 py-8 md:px-8 space-y-6 text-gray-700">
        <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-3">1. Information We Collect</h2>
          <p className="leading-relaxed">
            At Xpressio, we collect information you provide directly to us, such as when you create an account,
            place an order, or contact customer support. This may include your name, email address, phone number,
            shipping address, and payment details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-3">2. How We Use Your Information</h2>
          <p className="leading-relaxed">
            We use your information to process orders, deliver products, communicate with you about your orders,
            improve our services, and personalize your shopping experience. We never sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-3">3. Sharing of Information</h2>
          <p className="leading-relaxed">
            We may share your information with trusted service providers (e.g., delivery partners, payment processors)
            solely to fulfill your orders. All partners are contractually bound to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-3">4. Data Security</h2>
          <p className="leading-relaxed">
            We implement industry-standard security measures including encryption, secure servers, and regular audits
            to protect your personal information from unauthorized access or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-3">5. Your Rights</h2>
          <p className="leading-relaxed">
            You have the right to access, correct, or delete your personal data. You can also opt out of marketing
            communications at any time by clicking "unsubscribe" in our emails or contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-3">6. Cookies</h2>
          <p className="leading-relaxed">
            We use cookies to remember your preferences, analyze site traffic, and improve your experience.
            You can disable cookies in your browser settings, but some features may not function properly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-red-600 mb-3">7. Contact Us</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            📧 <a href="mailto:privacy@xpressio.com" className="text-red-500 hover:underline">privacy@xpressio.com</a><br />
            📞 +880 1234 567890
          </p>
        </section>

        <div className="pt-6 text-center text-sm text-gray-400 border-t border-zinc-200 mt-8">
          &copy; {new Date().getFullYear()} Xpressio. All rights reserved.
        </div>
      </div>
    </div>

  )
}

export default Privacy