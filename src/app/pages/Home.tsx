import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Added hooks
import heroVideo from "../../assets/hero.mp4";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Package,
  Truck,
  Globe,
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Ship,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";

// New Counter Component for dynamic numbering
function Counter({
  value,
  duration = 2000,
}: {
  value: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  // Parse the number from strings like "50K+", "98%", etc.
  const target = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Home(this: any) {
  const stats = [
    { number: "50K+", label: "Deliveries Completed" },
    { number: "150+", label: "Countries Covered" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "24/7", label: "Customer Support" },
  ];

  // FOR SERVICE ARRAY OBJECT
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Express Delivery",
      description:
        "Priority routing for urgent shipments with guaranteed 24-hour arrival windows.",
    },
    {
      icon: <Globe className="w-12 h-12 text-orange-500" />,
      title: "Global Shipping",
      description:
        "Seamless international logistics with automated customs clearance documentation.",
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      title: "Smart Warehousing",
      description:
        "AI-driven inventory management in climate-controlled strategic hubs.",
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: "Full Protection",
      description:
        "Comprehensive cargo insurance covering 100% of your shipment value.",
    },
  ];

  // Testimonials array
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      text: "The real-time tracking is incredibly precise. It changed how we manage our supply chain.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Global Trade Co.",
      text: "Professional, punctual, and proactive. They handle customs hurdles like they don't exist.",
      rating: 5,
    },
    {
      name: "Elena Rostova",
      company: "Vanguard Logistics",
      text: "Reduced our shipping delays by over 40% in the first quarter alone. Customer support is top-notch.",
      rating: 5,
    },
    {
      name: "David Miller",
      company: "Apex Retail Group",
      text: "Seamless integration with our e-commerce platform. Their automated routing saved us hundreds of hours.",
      rating: 5,
    },
    {
      name: "Aisha Patel",
      company: "Horizon Freight Services",
      text: "The visibility across international lanes gives us complete peace of mind. Highly recommend their platform.",
      rating: 4,
    },
    {
      name: "Marcus Vance",
      company: "Nexus Supply Systems",
      text: "Exceptional service reliability. Even during peak seasonal surges, they delivered on every promise.",
      rating: 5,
    },
    {
      name: "Chloe Dubois",
      company: "Lumière Organics",
      text: "Temperature-controlled tracking for perishable goods was a game changer for our business expansion.",
      rating: 5,
    },
    {
      name: "Robert Takahashi",
      company: "Kuroda Industrial",
      text: "Clear pricing, zero hidden fees, and lightning-fast issue resolution whenever weather delays hit.",
      rating: 4,
    },
    {
      name: "Sofia Benitez",
      company: "Solare Energy Solutions",
      text: "Managing heavy equipment logistics used to be a nightmare until we onboarded with this team.",
      rating: 5,
    },
    {
      name: "James Thorne",
      company: "Atlas Manufacturing",
      text: "Their predictive analytics helped us forecast freight bottlenecks before they actually affected production.",
      rating: 5,
    },
    {
      name: "Hannah Lindqvist",
      company: "Nordic Imports",
      text: "The dashboard UI is intuitive, making cross-border compliance documentation quick and painless.",
      rating: 4,
    },
    {
      name: "Tariq Al-Mansoor",
      company: "Crescent Distribution",
      text: "Hands down the best logistics partner we’ve worked with in over a decade of operation.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      company: "Beacon Healthcare",
      text: "For critical medical supply deliveries, precision is everything. They have never missed a deadline.",
      rating: 5,
    },
    {
      name: "Carlos Gomez",
      company: "Pacific Commerce Ltd.",
      text: "Flexibility and speed are paramount for us, and their multi-carrier options make scaling effortless.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Zenith Global Trading",
      text: "The automated notifications keep our end clients informed every step of the way. Great experience!",
      rating: 4,
    },
  ];

  // TESTIMONIAL SLIDES

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="min-h-screen font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        {/* <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow"
          alt="Cargo Terminal"
        /> */}
        <video
          src={heroVideo}
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative z-20 text-center justify-center px-4 max-w-5xl mx-auto text-white">
          {/* <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-orange-500 text-md font-bold uppercase tracking-widest mb-6 "
          >
            STERLING CRESTLogistics ltd
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-6 leading-tight"
          >
            Move Faster.
            <span className="text-orange-500">Reach Further.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }} // Fixed axis mismatch (x: 30 -> x: 0)
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-6 sm:mb-8 md:mb-10 font-medium text-center max-w-[90%] sm:max-w-2xl md:max-w-3xl mx-auto px-4 leading-relaxed"
          >
            Precision global cargo routing, automated customs clearance, and
            real-time telemetry for modern enterprise supply chains.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/tracking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
            >
              Track Shipment <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all"
            >
              Request Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION (Dynamic Counting Applied) */}
      <section className="py-12 relative bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center border-r border-slate-800 last:border-0"
              >
                <div className="text-4xl font-black text-orange-500 mb-1">
                  <Counter value={stat.number} />
                </div>
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Truck className="w-full h-full rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
                Our Expertise
              </h2>
              <p className="text-4xl md:text-5xl font-black text-slate-950">
                Integrated supply chain solutions for the modern era.
              </p>
            </div>
            <Link
              to="/services"
              className="text-slate-950 font-bold flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all"
              >
                <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMITMENT SECTION (Fixed Parallax) */}
      <section
        className="py-24 relative bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Uncompromising Standards <br />
                <span className="text-orange-500">In Every Mile.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Real-time proprietary GPS tracking technology",
                  "24/7 dedicated account management",
                  "Multi-modal transport (Air, Sea, Land)",
                  "Eco-conscious carbon-neutral initiatives",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="bg-orange-500/20 p-2 rounded-full group-hover:bg-orange-500 transition-colors">
                      <CheckCircle className="w-5 h-5 text-orange-500 group-hover:text-white" />
                    </div>
                    <span className="text-lg font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <Plane className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="text-xl font-bold">Air Freight</h4>
                <p className="text-slate-400 text-sm mt-2">
                  Next flight out service
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 mt-8 hover:bg-white/10 transition-colors">
                <Ship className="w-10 h-10 text-orange-500 mb-4" />
                <h4 className="text-xl font-bold">Ocean Cargo</h4>
                <p className="text-slate-400 text-sm mt-2">
                  Full container loads
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              Partner Feedback
            </h2>
            <p className="text-4xl font-black text-slate-950">
              Trusted by Global Enterprises
            </p>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            showDots={true}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="px-3"
          >
            {/* {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-row md:flex-row gap-8 items-center h-full"
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 font-black text-2xl">
                    {t.name.charAt(0)}
                  </div>
                </div>
                 
                <div>
                  <p className="text-xl text-slate-700 italic mb-6">
                    "{t.text}"
                  </p>
                   <h4 className="font-bold text-slate-950">{t.name}</h4> 
                  <p className="text-orange-500 text-sm font-bold uppercase">
                    {t.company}
                  </p>
                </div>
              </div>
            ))} */}

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="
bg-white
rounded-3xl
p-8
md:p-10
shadow-xl
flex
flex-row
gap-6
items-center
max-w-4xl
mx-auto
min-h-55
"
              >
                {/* Avatar */}
                <div className="shrink-0">
                  <div
                    className="
w-20 h-20
rounded-full
bg-orange-100
flex items-center justify-center
text-orange-500
font-black
text-2xl
"
                  >
                    {t.name.charAt(0)}
                  </div>
                </div>
                 {/* Content */}
                <div className="flex-1">
                  <p className="text-slate-600 text-lg leading-relaxed mb-5 italic">
                    "{t.text}"
                  </p>
                   
                  <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                   
                  <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                    {t.company}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 relative bg-slate-950 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Night Logistics"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Join 5,000+ businesses that rely on Steadfastfor their
            mission-critical deliveries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-full font-black text-lg transition-all shadow-xl shadow-orange-500/20"
            >
              Get Started Today
            </Link>
            <Link
              to="/contact"
              className="bg-white text-slate-950 hover:bg-slate-100 px-12 py-5 rounded-full font-black text-lg transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
