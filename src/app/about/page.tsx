export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-6">About Portfolio Stalker</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          We&apos;re building the future of portfolio tracking and investment monitoring.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-dark-800 p-8 rounded-lg border border-dark-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            At Portfolio Stalker, we believe that every investor deserves access to powerful, 
            easy-to-use tools for tracking and analyzing their investments. Our mission is to 
            democratize portfolio management by providing professional-grade analytics and 
            insights to investors of all levels.
          </p>
          <p className="text-gray-300">
            We&apos;re committed to transparency, security, and user privacy, ensuring that your 
            financial data is always protected while providing you with the insights you need 
            to make informed investment decisions.
          </p>
        </div>

        <div className="bg-dark-800 p-8 rounded-lg border border-dark-700">
          <h2 className="text-2xl font-semibold text-white mb-4">What We Do</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Real-time portfolio tracking and monitoring</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Advanced analytics and performance metrics</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Risk assessment and portfolio optimization</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Secure data storage and privacy protection</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Intuitive user interface and mobile access</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-dark-800 p-8 rounded-lg border border-dark-700">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
            <p className="text-gray-300 text-sm">
              Your financial data security is our top priority. We use industry-leading 
              encryption and security practices.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300 text-sm">
              We continuously innovate to provide cutting-edge features and the best 
              user experience in portfolio tracking.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">User-Centric</h3>
            <p className="text-gray-300 text-sm">
              Every feature we build is designed with our users in mind, focusing on 
              simplicity, clarity, and actionable insights.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-gray-300 mb-6">
          Join thousands of investors who trust Portfolio Stalker to monitor their investments.
        </p>
        <a
          href="/app"
          className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          Start Tracking Your Portfolio
        </a>
      </div>
    </div>
  );
}
