export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-dark-800 rounded-lg p-8 border border-dark-700">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Personal Information Collection</h2>
              <p className="mb-4">
                Portfolio Stalker does not collect or store any of your personal information (Personally Identifiable Information or PII). We do not collect your name, address, email address, phone number, credit card or any other information that identifies you.
              </p>
              <p className="mb-4">
                All payment information is collected and processed by the Google Play store. See Google privacy policy:
              </p>
              <div className="mb-4 p-4 bg-dark-700 rounded-lg">
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 underline"
                >
                  https://policies.google.com/privacy
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Google Play Store Identity Token</h2>
              <p className="mb-4">
                Portfolio Stalker uses your Google Play Store identity token to validate your purchase. This token is short lived and we do not store it. For more information see:
              </p>
              <div className="mb-4 p-4 bg-dark-700 rounded-lg">
                <a 
                  href="https://cloud.google.com/docs/authentication/token-types#identity-tokens" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 underline"
                >
                  https://cloud.google.com/docs/authentication/token-types#identity-tokens
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Storage and User ID</h2>
              <p className="mb-4">
                We store any customized information you enter, such as tracked stocks, stock holdings, settings, notes, and information we derive, such as transaction history, and portfolio value history, against your User ID token in our cloud database. This has several benefits:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>You can install Portfolio Stalker on a new device and see your information without manual copy</li>
                <li>You can use multiple devices to view the same information without manually copying that information between devices</li>
                <li>You can perform backup & restore should you overwrite your data</li>
                <li>You do not lose your information if you lose or reset your device</li>
                <li>Your data is not lost if you forget to renew your subscription*</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                * This information is deleted 3 months after you cancel your subscription and cannot be recovered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Export</h2>
              <p>
                You can export your portfolio and portfolio history to your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your data against unauthorized access, 
                alteration, disclosure, or destruction. Your portfolio data is stored securely in our cloud database 
                and is only accessible through your authenticated User ID token.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this privacy policy or our data practices, 
                please contact us through the Google Play Store or our support channels.
              </p>
              <div className="mt-4 p-4 bg-dark-700 rounded-lg">
                <p><strong>Support Email:</strong> 
                  <a 
                    href="mailto:support@portfolio-stalker.com" 
                    className="text-primary-400 hover:text-primary-300 underline ml-2"
                  >
                    support@portfolio-stalker.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
