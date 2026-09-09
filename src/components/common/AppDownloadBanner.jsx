export const AppDownloadBanner = () => {
    return (
        <section className="bg-slate-100 py-12 md:py-16 overflow-hidden my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                            Make your online shop easier with our mobile app
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Shaofi Hat makes Islamic shopping easy—order authentic books, gifts, and lifestyle products delivered straight to your doorstep.
                        </p>
                        <div className="pt-2 flex justify-center lg:justify-start">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-transform hover:scale-105"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="h-12 sm:h-14 object-contain"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right Mobile Mockups */}
                    <div className="lg:col-span-6 relative flex justify-center items-center min-h-[280px] sm:min-h-[360px]">
                        {/* Background Accent Circle */}
                        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-slate-200/60 rounded-full blur-2xl -z-0" />

                        {/* Left Phone Mockup */}
                        <div className="relative z-10 w-36 sm:w-48 shadow-2xl rounded-[2rem] border-4 border-slate-900 bg-slate-900 overflow-hidden transform -rotate-6 translate-x-4">
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&auto=format&fit=crop&q=80"
                                alt="App Interface Preview 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Phone Mockup */}
                        <div className="relative z-20 w-36 sm:w-48 shadow-2xl rounded-[2rem] border-4 border-slate-900 bg-slate-900 overflow-hidden transform rotate-6 -translate-x-4">
                            <img
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop&q=80"
                                alt="App Interface Preview 2"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};