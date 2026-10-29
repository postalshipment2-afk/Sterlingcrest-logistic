import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../../lib/supabase"; // Adjust import path if needed

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        "quick-endpoint",
        {
          body: formData,
        },
      );

      // Handle function invocation transport errors
      if (error) {
        throw new Error(error.message || "Network request failed");
      }

      // Handle function execution business logic errors
      if (data && data.success === false) {
        throw new Error(data.error || "Failed to dispatch email");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: unknown) {
      console.error("Error sending message:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section
        className="relative h-100 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1557023279-753a4ae10313?auto=format&fit=crop&q=80&w=2000)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/80"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-500 font-medium tracking-[0.3em] uppercase mb-4 text-sm"
          >
            Communication Hub
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-light tracking-tight mb-4"
          >
            Let's <span className="italic font-normal">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 font-light"
          >
            Our logistics experts are ready to optimize your supply chain
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black text-slate-950 mb-6">
                Reach Out
              </h2>
              <p className="text-slate-600 mb-12 text-lg leading-relaxed">
                Have questions about our global network? Need a custom quote?
                Our team is here to help you find the perfect logistics
                solution.
              </p>

              <div className="grid gap-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Office Address
                    </h3>
                    <p className="text-slate-600">
                      2465 36 St NE, Calgary, AB T1Y 6H6,
                      <br />
                      Canada.
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                   <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Phone Numbers
                    </h3>
                    <span className="text-slate-600">
                      Main:{" "}
                      <a href="tel:+905393228230" className="hover:underline">
                        +90 (539) 3228 230
                      </a>
                      <br />
                      Support:{" "}
                      <a href="tel:+17068361262" className="hover:underline">
                        +1 (706) 836-1262
                      </a>
                    </span>
                  </div> 
                </div> */}

                <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Email Addresses
                    </h3>
                    <span className="text-slate-600">
                      <a
                        href="mailto:info@sterlingcrest-logistic.com"
                        className="hover:underline"
                      >
                        info@sterlingcrest-logistic.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-orange-100 p-4 rounded-2xl group-hover:bg-orange-500 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950 mb-1 uppercase tracking-wider text-sm">
                      Business Hours
                    </h3>
                    <p className="text-slate-600">
                      Mon - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Sat: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-2xl font-black text-slate-950 mb-8 uppercase tracking-tight">
                Direct Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all disabled:opacity-50"
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all disabled:opacity-50"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all appearance-none disabled:opacity-50"
                  >
                    <option value="">Select an option</option>
                    <option value="quote">Request a Quote</option>
                    <option value="tracking">Tracking Issue</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-5 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none disabled:opacity-50"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Dispatch
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-125 w-full grayscale hover:grayscale-0 transition-all duration-700">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1677685432123!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}

        <iframe
  src="https://maps.google.com/maps?q=2465%2036%20St%20NE%2C%20Calgary%2C%20AB%20T1Y%206H6%2C%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
      </section>
    </div>
  );
}
