import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white mt-auto py-8 w-full bottom-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:your.email@example.com" className="hover:text-gray-300">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gray-300">About</Link>
                            </li>
                            <li>
                                <Link to="/gallery/animations" className="hover:text-gray-300">Animations</Link>
                            </li>
                            <li>
                                <Link to="/gallery/art" className="hover:text-gray-300">Art</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Other Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/mtobino/john-portfolio/issues" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                    Report an Issue
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
                    <p>© {new Date().getFullYear()} John's Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;