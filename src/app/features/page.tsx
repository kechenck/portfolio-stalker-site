export default function FeaturesPage() {
  const features = [
    {
      title: "Real-time Portfolio Tracking",
      description: "Monitor your investments with live price updates and instant notifications on market movements.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Advanced Analytics",
      description: "Get detailed insights with performance metrics, risk analysis, and portfolio optimization suggestions.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Secure & Private",
      description: "Your financial data is protected with bank-level security and privacy-first design.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Multi-Asset Support",
      description: "Track stocks, bonds, ETFs, cryptocurrencies, and other investment vehicles in one place.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Performance Insights",
      description: "Analyze your portfolio's performance with detailed charts, metrics, and historical data.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Mobile Access",
      description: "Access your portfolio anywhere with our responsive web app and mobile-optimized interface.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Powerful Features for
          <span className="text-primary-400 block">Portfolio Management</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Everything you need to track, analyze, and optimize your investment portfolio 
          with professional-grade tools and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="bg-dark-800 p-6 rounded-lg border border-dark-700 hover:border-primary-600 transition-colors">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Additional Features Section */}
      <div className="bg-dark-800 rounded-lg p-8 border border-dark-700">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Portfolio Stalker?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Comprehensive Tracking</h3>
            <p className="text-gray-300 mb-4">
              Track all your investments in one unified dashboard. From individual stocks to 
              complex portfolios, we support all major asset classes and investment types.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Real-time price updates
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Historical performance tracking
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Dividend and income tracking
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Transaction history
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Advanced Analytics</h3>
            <p className="text-gray-300 mb-4">
              Get professional-grade insights with our advanced analytics engine. Understand 
              your portfolio&apos;s risk profile, performance attribution, and optimization opportunities.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Risk assessment and metrics
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Performance attribution analysis
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Portfolio optimization suggestions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                Benchmark comparisons
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience These Features?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Start tracking your portfolio today and see the difference professional tools can make.
        </p>
        <a
          href="/app"
          className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
        >
          Get Started Free
        </a>
      </div>
    </div>
  );
}
