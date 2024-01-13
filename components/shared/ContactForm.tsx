"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mayrnojp");

  
  if (state.succeeded) {
    return <p className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">Message sent successfully.</p>
  }

  return (
    <form
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 dark:text-gray-400"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg mb-1 font-medium title-font dark:text-white text-black">
        Connect with me
      </h2>
      <p className="leading-relaxed mb-5">
        Feel free to reach out to me with any questions or inquiries.
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full dark:bg-gray-900 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full dark:bg-gray-900 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full dark:bg-gray-900 rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 h-32 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button>Send Message</Button>
      <ValidationError errors={state.errors} />
      <p className="text-xs mt-3">
        I'll get back to you as soon as possible!
      </p>
    </form>
  );
}
