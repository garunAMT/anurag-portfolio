import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <section className="body-font relative" id="contact">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-600 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 grayscale-0 opacity-70"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Administrative Building, IIT Bhubaneswar, Jatni&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{
              filter: "contrast(1.2)",
            }}
          ></iframe>
          <div className="bg-white text-gray-800 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Brahmaputra Hall of Residence, IIT Bhubaneswar, Odisha, India,
                PIN-752050
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:anuragtripathi2901@gmail.com" className="text-green-500 leading-relaxed">
                anuragtripathi2901@gmail.com
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Footer;
