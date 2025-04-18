import HeroHeader from "../components/HeroHeader";
import aboutHero from "../assets/images/G_Hero.jpg";

const About = () => {
  return (
    <>
      <HeroHeader
        title="About Me"
        imageUrl={aboutHero}
      >
        <p className="text-xl mb-8 max-w-2xl text-center">
          Creative Professional | Digital Artist | Animator
        </p>
      </HeroHeader>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to my creative world! I'm a passionate digital artist and animator with a deep love for visual storytelling. 
              My journey in the creative industry has been driven by a constant desire to push boundaries and explore new artistic horizons.
            </p>
            <p className="text-lg text-gray-700">
              With a background in both traditional and digital art, I bring a unique perspective to every project I undertake. 
              My work is characterized by attention to detail, vibrant color palettes, and a commitment to creating meaningful visual experiences.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Digital Art</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Concept Art & Illustration</li>
                  <li>• Character Design</li>
                  <li>• Digital Painting</li>
                  <li>• Visual Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Animation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2D Animation</li>
                  <li>• Motion Graphics</li>
                  <li>• Storyboarding</li>
                  <li>• Character Animation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Freelance Artist & Animator</h3>
                <p className="text-gray-600 mb-2">2020 - Present</p>
                <p className="text-gray-700">
                  Working with diverse clients to create compelling visual content, from character designs to animated sequences. 
                  Specializing in bringing creative visions to life through digital art and animation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Digital Art Instructor</h3>
                <p className="text-gray-600 mb-2">2018 - 2020</p>
                <p className="text-gray-700">
                  Taught digital art techniques and animation principles to aspiring artists, helping them develop their skills 
                  and find their unique artistic voice.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">My Creative Philosophy</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">
                I believe that art should not only be visually appealing but also tell a story and evoke emotions. 
                Every piece I create is an opportunity to connect with viewers on a deeper level.
              </p>
              <p className="text-lg text-gray-700">
                My approach combines technical skill with creative intuition, always striving to push the boundaries 
                of what's possible in digital art and animation.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;