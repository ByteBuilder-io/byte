const ContactForm = () => {
  return (
    <div className="flex justify-start bg-black mb-[150px]">
      <div className="mx-auto w-full max-w-[80%]">
        <h1 className="text-4xl font-medium">Contact us</h1>
        <p className="mt-3">
          Email us at pepe@bytebuilder.io or message us here:
        </p>

        <form
          action="https://api.web3forms.com/submit"
          className="mt-10"
          method="POST">
          {/* <!-- This is a working contact form. 
         Get your free access key from: https://web3forms.com/  --> */}

          <input
            type="hidden"
            name="access_key"
            value="e20d969f-2b98-4aeb-a433-514e96797a28"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white-900 focus:border-green-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600 peer-focus:dark:text-blue-500">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white-900 focus:border-green-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600 peer-focus:dark:text-blue-500">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={5}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white-900 focus:border-green-600 focus:outline-none focus:ring-0"
                placeholder=" "></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600 peer-focus:dark:text-blue-500">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-white px-10 py-2 text-black text-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
