import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact" className="mb-20 w-full">
        <h2 className="font-semibold text-3xl md:text-4xl text-gray-800 mb-6 mt-[86px]">
          Contact Me
        </h2>
        <p>
          If you'd like to reach me, please fill out the form below. You can
          also reach me via
          <a
            className="underline hover:no-underline"
            href="https://www.linkedin.com/in/daniel-moderiano-2a0429a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          or
          <a
            className="underline hover:no-underline"
            href="mailto:daniel.moderiano@outlook.com"
          >
            email
          </a>
          .
        </p>

        <form
          className="mt-6 flex flex-col items-start justify-start w-full"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <label htmlFor="name" className="mb-5 w-full max-w-sm">
            Name
            <span className="text-red-600">*</span>
            <input
              id="name"
              className="w-full mt-2 border rounded-md border-gray-300 py-2 px-3 focus:outline-none focus:ring ring-transparent ring-offset-2 ring-offset-slate-400/30 focus:border-gray-500 shadow-sm"
              type="text"
              required
              name="name"
            />
          </label>
          <label htmlFor="email" className="mb-5 w-full max-w-sm">
            Email
            <span className="text-red-600">*</span>
            <input
              id="email"
              className="w-full mt-2 border rounded-md border-gray-300 py-2 px-3 focus:outline-none focus:ring ring-transparent ring-offset-2 ring-offset-slate-400/30 focus:border-gray-500 shadow-sm"
              type="email"
              required
              name="email"
            />
          </label>
          <label htmlFor="message" className="mb-5 w-full max-w-sm">
            Message
            <span className="text-red-600">*</span>
            <textarea
              className="w-full mt-2 border rounded-md border-gray-300 py-2 px-3 focus:outline-none focus:ring ring-transparent ring-offset-2 ring-offset-slate-400/30 focus:border-gray-500 shadow-sm"
              name="message"
              id="message"
              cols="30"
              rows="6"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="rounded-full py-2 px-4 bg-gray-600 text-white font-medium hover:bg-gray-700"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
