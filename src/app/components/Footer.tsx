import {
  Package,
  Mail,
  Phone,
  MapPin,
  Home,
  Info,
  Truck,
  Search,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import {
  FaFacebookF as Facebook,
  FaTwitter as X,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="font-black text-lg text-white tracking-tighter uppercase">
                STERLING CREST{" "}
                <span className="text-orange-500">-Logistics ltd</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Global logistics redefined. We provide high-velocity supply chain
              solutions for the modern world, ensuring your assets reach their
              destination with surgical precision.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-all hover:-translate-y-1" />
              <X className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-all hover:-translate-y-1" />
              <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-all hover:-translate-y-1" />
              <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer transition-all hover:-translate-y-1" />
            </div>
          </div>

          {/* QUICK LINKS WITH ICONS */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 hover:text-orange-500 transition-colors group"
                >
                  <Home className="w-4 h-4 text-slate-600 group-hover:text-orange-500" />
                  <span className="text-sm">Control Center</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-3 hover:text-orange-500 transition-colors group"
                >
                  <Info className="w-4 h-4 text-slate-600 group-hover:text-orange-500" />
                  <span className="text-sm">Our Network</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center gap-3 hover:text-orange-500 transition-colors group"
                >
                  <Truck className="w-4 h-4 text-slate-600 group-hover:text-orange-500" />
                  <span className="text-sm">Solutions</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tracking"
                  className="flex items-center gap-3 hover:text-orange-500 transition-colors group"
                >
                  <Search className="w-4 h-4 text-slate-600 group-hover:text-orange-500" />
                  <span className="text-sm">Live Tracking</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 hover:text-orange-500 transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-slate-600 group-hover:text-orange-500" />
                  <span className="text-sm">Support Desk</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES LIST */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-widest">
              Specialized Services
            </h3>
            <ul className="space-y-4">
              {[
                "Express Delivery",
                "International Shipping",
                "Freight Services",
                "Warehousing",
                "Packaging Solutions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 group cursor-pointer hover:text-orange-500 transition-colors"
                >
                  <ChevronRight className="w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 uppercase tracking-widest">
              Headquarters
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                </div>
                <span className="text-sm leading-relaxed">
                  123 Logistics Ave, <br />
                  Shipping District, NY 10001
                </span>
              </li>
              {/* SECOND ADDRESS   */}
              {/* <li className="flex items-start gap-4 group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                </div>
                <span>
                  Osmanl Sokak No 2/B taksim 34437, <br />
                  Istanbul,Turkey.
                </span>
              </li> */}

              {/* FIRST PHONE NUMBER  */}
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                </div>
                <span className="text-sm">+1 (706) 836-1265</span>
              </li>

              {/* SECOND PHONE NUMBER  */}
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                </div>
                <span className="text-sm">+90 (539) 3228-230</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-orange-500/10 transition-colors">
                  <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                </div>
                <span className="text-sm">Support@STERLINGCREST.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-900 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-slate-300">
                STERLING CREST-Logistics ltd
              </span>
              . Systems Operational.
            </p>
            <p className="text-slate-600">
              Architecture by{" "}
              <span className="text-orange-500/80">Sterlingcrest</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
