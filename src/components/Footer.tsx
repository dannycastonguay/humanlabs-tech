
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Human Labs Tech
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Building an open-source foundation model for human health through advanced AI and global collaboration.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-slate-400">
                <span className="font-medium">General Inquiries:</span><br />
                <a href="mailto:hello@humanlabs.tech" className="text-blue-400 hover:text-blue-300 transition-colors">
                  hello@humanlabs.tech
                </a>
              </p>
              <p className="text-slate-400">
                <span className="font-medium">Team:</span><br />
                <a href="mailto:team@humanlabs.tech" className="text-blue-400 hover:text-blue-300 transition-colors">
                  team@humanlabs.tech
                </a>
              </p>
              <p className="text-slate-400">
                <span className="font-medium">Investment:</span><br />
                <a href="mailto:invest@humanlabs.tech" className="text-blue-400 hover:text-blue-300 transition-colors">
                  invest@humanlabs.tech
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/dannycastonguay/humanlabs-tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Human Labs Tech. All rights reserved. | Building the future of healthcare through open-source AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
