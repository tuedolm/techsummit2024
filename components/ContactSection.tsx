const ContactSection = () => {
    return (
      <div id="contact" className="w-full bg-neutral-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-neutral-700">Get in Touch</h3>
              <p className="mt-4 text-neutral-600">
                If you have any questions, please contact us at:
              </p>
              <a href="mailto:Contact@techsummitusa.org" className="text-purple-500 mt-2 block">Contact@techsummitusa.org</a>
              <p className="mt-4 text-neutral-600">
                Our event venue: Silicon Valley, CA
              </p>
              <h4 className="mt-8 text-xl font-semibold text-neutral-700">Event Locations</h4>
              <div className="mt-4">
                <p className="font-bold">August 16 - Networking night:</p>
                <p className="text-neutral-600">Palo Alto Art Center - 1313 Newell Rd, Palo Alto, CA 94306</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">August 17 - Main conference:</p>
                <p className="text-neutral-600">Burlingame Community Center, 850 Burlingame Ave, Burlingame, CA 94010</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold text-neutral-700">Contact Information</h3>
              <p className="mt-4 text-neutral-600">
                <strong>Phone 1:</strong> (346) 714-4762
                <br />
                <strong>Phone 2:</strong> (315) 439-2737
                <br />
                <strong>Phone 3:</strong> (608) 466-0156
                <br />
                <strong>Email:</strong> <a href="mailto:Contact@techsummitusa.org" className="text-purple-500">Contact@techsummitusa.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactSection;
  