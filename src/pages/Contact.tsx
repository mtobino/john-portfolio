import HeroHeader from "../components/HeroHeader";
import contactHero from "../assets/images/G_Hero.jpg";

const Contact = () => {
  return (
    <>
      <HeroHeader
        title="Get in Touch"
        imageUrl={contactHero}
      >
        <p className="text-xl mb-8 max-w-2xl text-center">
          Let's connect and discuss potential collaborations or opportunities
        </p>
      </HeroHeader>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
            
            {/* Email Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <div className="flex items-center space-x-4">
                <svg 
                  className="w-6 h-6 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
            </div>

            {/* LinkedIn Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
              <div className="flex items-center space-x-4">
                <svg 
                  className="w-6 h-6 text-[#0077B5]" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a 
                  href="https://www.linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;