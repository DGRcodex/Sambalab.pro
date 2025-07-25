export default function Newsletter() {
  return (
    <section className="bg-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative0 bg-purple-100 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          {/* Background illustration */}
          <div className=" absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <svg width="238" height="110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="illustration-04" x1="369.483" y1="-84.633" x2="139.954" y2="-199.798" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity=".01" />
                  <stop offset="1" stopColor="#fff" stopOpacity=".24" />
                </linearGradient>
              </defs>
              <path fillRule="evenodd" clipRule="evenodd" d="1.744-.529-1.355-.615-2.427-2.41-3.629-6.085-2.45-7.49-4.398-8.073-7.931-9.131h-.002c-2.648-.793-5.944-1.78-10.552-5.558-6.026-4.94-13.81-7.262-21.575-9.25 6.993 2.523 13.83 5.43 19.253 9.888 4.361 3.594 7.591 4.527 10.187 5.277h.002c3.978 1.15 6.853 1.981 9.735 10.385z" fill="url(#illustration-04)" />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-gray-700 mb-2">Stay in the loop</h3>
              <p className="text-gray-400 text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="email" className="w-full appearance-none bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-purple-400" placeholder="Your best email…" aria-label="Your best email…" />
                <a className="btn text-purple-600 bg-purple-100 hover:bg-white shadow" href="#0">Subscribe</a>
              </div>
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>

          </div>

        </div>

      </div>
    </section>
  )
}
