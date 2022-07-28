import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="mt-8 h-96 flex flex-col items-center justify-center"
    >
      <h3 className="text-4xl">Get In Touch</h3>
      {/* Spacing */}
      <div className="p-2"></div>
      <p className="max-w-xl">
        I am currently looking for Front-End Developer role. Drop me a message
        and let's start from there!
      </p>
      {/* Spacing */}
      <div className="p-8"></div>
      <address>
        <a
          href="mailto:matthewlu.tw@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="bg-black text-white py-3 px-6 rounded hover:cursor-pointer hover:opacity-75"
        >
          Say Hi
        </a>
      </address>
    </section>
  );
}

export default Contact;
