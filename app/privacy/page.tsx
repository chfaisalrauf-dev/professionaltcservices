export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last Updated: December 1, 2025
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-10 text-gray-700 leading-7">
          {/* Legal disclaimer */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Legal disclaimer
            </h2>

            <div className="mt-4 space-y-4">
              <p>
                The information provided on this website, including all content
                related to Transaction Coordination services, is for general
                informational purposes only and does not constitute legal,
                financial, or professional advice. ProfessionalTCServices makes
                no guarantees regarding the accuracy, completeness, or
                reliability of any information on this site.
              </p>

              <p>
                By using this website, you understand and agree that
                ProfessionalTCServices is not a law firm, does not provide legal
                representation, and is not responsible for any actions taken
                based on the information found on this site. You should consult
                an attorney, broker, or qualified professional for advice
                related to your specific situation or real estate transaction.
              </p>

              <p>
                ProfessionalTCServices is not liable for any direct, indirect,
                incidental, or consequential damages resulting from the use of
                this website or reliance on any information provided.
              </p>

              <p>
                Continued use of this website constitutes your acceptance of
                this disclaimer.
              </p>
            </div>
          </div>

          {/* Privacy Policy intro */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Privacy Policy</h2>

            <div className="mt-4 space-y-4">
              <p>
                ProfessionalTCservices (“we,” “our,” or “us”) is committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard data when you visit
                our website or use our Transaction Coordination services in the
                United States.
              </p>

              <p>
                No mobile opt-in text message consent will be shared with third
                party or affiliates.
              </p>
            </div>
          </div>

          {/* 1. Information We Collect */}
          <PolicySection title="1. Information We Collect">
            <p>We may collect:</p>
            <ul className="mt-3 list-disc pl-6">
              <li>Name, email, phone number, and company/brokerage</li>
              <li>Transaction details and documents you choose to share</li>
              <li>
                Website usage data such as IP address, browser type, and pages
                visited
              </li>
            </ul>
          </PolicySection>

          {/* 2. How We Use Your Information */}
          <PolicySection title="2. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="mt-3 list-disc pl-6">
              <li>Provide Transaction Coordination services</li>
              <li>Communicate with you and respond to inquiries</li>
              <li>Organize and manage real estate transaction files</li>
              <li>Improve website performance and service quality</li>
            </ul>
            <p className="mt-4">We do not sell your personal data.</p>
          </PolicySection>

          {/* 3. Sharing of Information */}
          <PolicySection title="3. Sharing of Information">
            <p>We may share your information only when necessary, including with:</p>
            <ul className="mt-3 list-disc pl-6">
              <li>
                Real estate parties involved in your transaction (agents, title,
                escrow, lenders)
              </li>
              <li>
                Service tools used for communication, file organization, and
                e-signatures
              </li>
              <li>Legal authorities if required by law</li>
            </ul>
          </PolicySection>

          {/* 4. Data Protection */}
          <PolicySection title="4. Data Protection">
            <p>We take reasonable measures to store and protect your data securely.</p>
            <p className="mt-3">However, no online system can guarantee complete security.</p>
          </PolicySection>

          {/* 5. Your Choices */}
          <PolicySection title="5. Your Choices">
            <p>You may request to:</p>
            <ul className="mt-3 list-disc pl-6">
              <li>Access your information</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your stored information</li>
            </ul>

            <div className="mt-5 rounded-xl border bg-gray-50 p-4">
              <p>Contact us at:</p>
              <p className="mt-2">📧 faisal@professionaltcservices.com</p>
              <p>📞 +1(408) 708-2802</p>
            </div>
          </PolicySection>

          {/* 6. Cookies */}
          <PolicySection title="6. Cookies">
            <p>Our site may use cookies for functionality and analytics.</p>
            <p className="mt-3">You may disable cookies in your browser settings.</p>
          </PolicySection>

          {/* 7. Changes to This Policy */}
          <PolicySection title="7. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time.</p>
            <p className="mt-3">
              The revised version will always show the latest “Last Updated” date.
            </p>
          </PolicySection>

          {/* 8. SMS */}
          <PolicySection title="8. SMS">
            <h3 className="text-lg font-semibold text-gray-900">
              SMS Terms &amp; Conditions
            </h3>

            <p className="mt-3">
              The Terms of Service related to SMS communication must either be included in the privacy
              policy or be a stand-alone document. Note: If the customer has a Terms and Conditions page,
              this information should be included there, and not in the privacy policy. The document must
              include the following:
            </p>

            <p className="mt-4 font-semibold text-gray-900">SMS Terms &amp; Conditions</p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="font-semibold text-gray-900">
                  1- SMS Consent Communication:
                </p>
                <p className="mt-2">
                  The information (Phone Numbers) obtained as part of the SMS consent process will not be
                  shared with third parties for marketing purposes.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  2- Types of SMS Communications:
                </p>
                <p className="mt-2">
                  If you have consented to receive text messages from Professional TC Services, you may receive
                  messages related to the following (provide specific examples):
                </p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Appointment reminders</li>
                  <li>Follow-up messages</li>
                  <li>Billing inquiries</li>
                  <li>Promotions or offers (if applicable)</li>
                </ul>
                <p className="mt-3">
                  Example: "Hello, this is a friendly reminder of your upcoming appointment with Dr. [Name] at
                  [Location] on [Date] at [Time]. Reply STOP to opt out of SMS messaging at any time."
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  3- Message Frequency:
                </p>
                <p className="mt-2">
                  Message frequency may vary depending on the type of communication. For example, you may
                  receive up to [X] SMS messages per week related to your [appointments/billing, etc.].
                </p>
                <p className="mt-3">Example:</p>
                <p className="mt-2">
                  "Message frequency may vary. You may receive up to 2 SMS messages per week regarding
                  your appointments or account status."
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  4- Potential Fees for SMS Messaging:
                </p>
                <p className="mt-2">
                  Please note that standard message and data rates may apply, depending on your carrier’s
                  pricing plan. These fees may vary if the message is sent domestically or internationally.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  5- Opt-In Method:
                </p>
                <p className="mt-2">
                  You may opt-in to receive SMS messages from (Professional TC Services in the following ways:
                </p>
                <ul className="mt-2 list-disc pl-6">
                  <li>Verbally, during a conversation</li>
                  <li>By submitting an online form</li>
                  <li>By filling out a paper form</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  6- Opt-Out Method:
                </p>
                <p className="mt-2">
                  You can opt out of receiving SMS messages at any time. To do so, simply reply "STOP" to any
                  SMS message you receive. Alternatively, you can contact us directly to request removal from
                  our messaging list.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  7- Help:
                </p>
                <p className="mt-2">
                  If you are experiencing any issues, you can reply with the keyword HELP. Or, you can get help
                  directly from us at Professionaltcservices.com
                </p>

                <p className="mt-4 font-semibold text-gray-900">Additional Options:</p>
                <p className="mt-2">
                  If you do not wish to receive SMS messages, you can choose not to check the SMS consent
                  box on our forms.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  8- Standard Messaging Disclosures:
                </p>
                <p className="mt-2">Message and data rates may apply.</p>
                <p>You can opt out at any time by texting "STOP."</p>
                <p>
                  For assistance, text "HELP" or visit our [Privacy Policy] and [Terms and Conditions] pages.
                </p>
                <p>Message frequency may vary</p>
              </div>
            </div>
          </PolicySection>
        </div>
      </section>
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
