import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  TrendingUp,
  Award,
  Globe2,
  Shield,
  CheckCircle,
} from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Reliability",
      description:
        "We deliver on our promises with consistent, dependable service every time.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go the extra mile for every client.",
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Excellence",
      description:
        "Striving for the highest standards in every aspect of our service.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-orange-500" />,
      title: "Global Vision",
      description:
        "Connecting businesses worldwide with seamless logistics solutions.",
    },
  ];

  const milestones = [
    {
      year: "2010",
      event: "Company Founded",
      description: "Started with a single warehouse and 10 employees",
    },
    {
      year: "2014",
      event: "International Expansion",
      description: "Expanded operations to 50 countries",
    },
    {
      year: "2018",
      event: "Technology Integration",
      description: "Launched real-time tracking system",
    },
    {
      year: "2022",
      event: "Carbon Neutral",
      description: "Achieved carbon-neutral delivery operations",
    },
    {
      year: "2026",
      event: "Industry Leader",
      description: "Serving 50,000+ businesses globally",
    },
  ];

  const team = [
    {
      name: "John Anderson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    {
      name: "Sarah Mitchell",
      role: "Chief Operations Officer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "David Park",
      role: "Head of Logistics",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    },
    {
      name: "Maria Garcia",
      role: "Customer Relations Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER SECTION */}
      <section
        className="relative h-112.5 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-orange-500 text-sm font-bold uppercase tracking-widest mb-6"
          >
            Our Legacy
          </motion.span> */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            About{" "}
            <span className="text-orange-500">Sterling Crest- logistic</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200"
          >
            Pioneering the future of global logistics since 2010
          </motion.p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
                Our History
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 leading-tight">
                From Local Deliveries to{" "}
                <span className="text-orange-500">Global Excellence.</span>
              </h3>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2010, Sterling Crest- logistic started as a small
                  local delivery service with a big vision: to revolutionize the
                  logistics industry through technology, reliability, and
                  exceptional customer service.
                </p>
                <p>
                  Today, we've grown into a global logistics powerhouse, serving
                  over 50,000 businesses across 150+ countries. Our success is
                  built on our unwavering commitment to innovation and
                  sustainability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                alt="Logistics"
                className="rounded-3xl shadow-xl w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
                alt="Warehouse"
                className="rounded-3xl shadow-xl w-full h-64 object-cover mt-12"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-4xl border border-white/10"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Mission</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To provide world-class logistics solutions that empower
                businesses to thrive in a connected world. We deliver excellence
                through innovation and unwavering dedication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-4xl border border-white/10"
            >
              <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the world's most trusted logistics partner, setting new
                standards for efficiency and sustainability. We envision a
                future where global commerce is accessible to all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              Foundations
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-950">
              Our Core Values
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-2xl transition-all group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              The Journey
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-950">
              Milestones of Growth
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`mb-12 flex flex-col md:flex-row items-center ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-black mb-4">
                      {milestone.year}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-950 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-2/12 justify-center z-10">
                  <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white ring-4 ring-orange-100 shadow-sm"></div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-orange-500 font-bold uppercase tracking-widest mb-3">
              Leadership
            </h2>
            <p className="text-4xl md:text-5xl font-black text-slate-950">
              Expert Minds Behind SwiftCourier
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                      Leading with integrity and innovation.
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-bold uppercase tracking-wider text-sm">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
