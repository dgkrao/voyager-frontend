import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-32">

        <h1 className="text-4xl font-semibold mb-4">
          Contact Us
        </h1>
        <p className="text-white/60 max-w-2xl mb-16">
          Have questions or need help planning your journey?
          Our travel experts are here to help.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-1">
                Email
              </h3>
              <p className="text-white/60">
                support@voyagertravel.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1">
                Phone
              </h3>
              <p className="text-white/60">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1">
                Office
              </h3>
              <p className="text-white/60">
                Bangalore, India
              </p>
            </div>

            <p className="text-white/50 text-sm pt-6">
              Available Monday to Saturday · 9 AM – 6 PM
            </p>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-xl font-semibold mb-6">
              Send us a message
            </h2>

            {["Full Name", "Email Address", "Phone Number"].map(
              (field, i) => (
                <input
                  key={i}
                  placeholder={field}
                  className="w-full mb-4 px-5 py-4 rounded-xl bg-black/60 border border-white/15 focus:outline-none focus:border-indigo-400"
                />
              )
            )}

            <textarea
              placeholder="How can we help you?"
              className="w-full h-32 mb-6 px-5 py-4 rounded-xl bg-black/60 border border-white/15 focus:outline-none focus:border-indigo-400"
            />

            <button className="w-full py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 font-medium">
              Submit Enquiry
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
