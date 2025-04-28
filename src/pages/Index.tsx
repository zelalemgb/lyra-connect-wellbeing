
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/navbar";
import { Calendar, MessageSquare, ShieldCheck, Video } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-lyra-blue/10">
        <div className="lyra-container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lyra-dark leading-tight">
                Your Health, <span className="text-lyra-teal">Connected</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Connect with healthcare providers anytime, anywhere. Book appointments, 
                consult online, and take control of your wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-lyra-teal hover:bg-lyra-teal/90">
                    Get Started
                  </Button>
                </Link>
                <Link to="/providers">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Find Providers
                  </Button>
                </Link>
              </div>
              <div className="flex items-center text-gray-500 pt-4">
                <ShieldCheck className="h-5 w-5 mr-2" />
                <span className="text-sm">Secure, private, and HIPAA compliant</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-lyra-teal rounded-full opacity-10 blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Lyra Health Platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lyra-dark/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Connect with specialists</h3>
                    <p className="text-white/80">Get the care you need, when you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="lyra-container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Lyra Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with healthcare providers through a simple and secure platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="h-14 w-14 rounded-full bg-lyra-blue/20 flex items-center justify-center mb-4">
              <Calendar className="h-7 w-7 text-lyra-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">
              Book appointments with healthcare providers based on their availability
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="h-14 w-14 rounded-full bg-lyra-teal/20 flex items-center justify-center mb-4">
              <Video className="h-7 w-7 text-lyra-teal" />
            </div>
            <h3 className="text-xl font-bold mb-2">Video Consultations</h3>
            <p className="text-gray-600">
              Connect face-to-face with your provider from the comfort of your home
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="h-14 w-14 rounded-full bg-lyra-mint/20 flex items-center justify-center mb-4">
              <MessageSquare className="h-7 w-7 text-lyra-mint" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Messaging</h3>
            <p className="text-gray-600">
              Follow up with your provider through our encrypted messaging system
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/how-it-works">
            <Button variant="link" className="text-lyra-teal">
              Learn more about how Lyra works
            </Button>
          </Link>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-lyra-dark text-white">
        <div className="lyra-container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to take control of your health?</h2>
              <p className="text-white/80 mb-6">
                Join thousands of patients who have simplified their healthcare journey with Lyra Health.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-lyra-teal hover:bg-lyra-teal/90">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/providers">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto text-white border-white hover:bg-white/10"
                  >
                    Browse Providers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-4xl font-bold text-lyra-teal mb-2">2000+</div>
                <div className="text-white/80">Verified Providers</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-4xl font-bold text-lyra-blue mb-2">24/7</div>
                <div className="text-white/80">Available Support</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-4xl font-bold text-lyra-mint mb-2">50k+</div>
                <div className="text-white/80">Happy Patients</div>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-4xl font-bold text-white mb-2">4.8</div>
                <div className="text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="lyra-container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/about" className="hover:text-lyra-teal transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-lyra-teal transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-lyra-teal transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/providers" className="hover:text-lyra-teal transition-colors">Find Providers</Link></li>
                <li><Link to="/how-it-works" className="hover:text-lyra-teal transition-colors">How It Works</Link></li>
                <li><Link to="/help" className="hover:text-lyra-teal transition-colors">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/terms" className="hover:text-lyra-teal transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-lyra-teal transition-colors">Privacy Policy</Link></li>
                <li><Link to="/hipaa" className="hover:text-lyra-teal transition-colors">HIPAA Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-lyra-teal transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-lyra-teal transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-lyra-teal transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© 2025 Lyra Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
