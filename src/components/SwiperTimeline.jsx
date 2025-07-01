// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'SwiperTimeline.css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow'; // Import Coverflow effect CSS

// // Import Swiper modules
// import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'; // Add EffectCoverflow and Autoplay

// const swiperInterface = [
//     { id: 1, name: "Developer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/images/developer.jpg" },
//     { id: 2, name: "Designer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/images/designer.jpg" },
//     { id: 3, name: "Editor", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/images/editor.jpg" },
//     { id: 4, name: "Marketer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/images/marketer.jpg" },
//     { id: 5, name: "Gamer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", src: "/images/gamer.jpg" }
// ];

// const SwiperTimeline = () => {
//     return (
//         <div className="card-wrapper bg-emerald-100 py-16"> {/* Added padding for better spacing */}
//             <Swiper
//                 // Add the new modules
//                 modules={[Pagination, Navigation, EffectCoverflow, Autoplay]} 
                
//                 // Core Swiper settings
//                 spaceBetween={0} // Changed for Coverflow effect
//                 slidesPerView={1}
//                 centeredSlides={true} // Important for Coverflow to center the active slide
//                 loop={true} // Enable looping for a continuous flow
                
//                 // Autoplay settings
//                 autoplay={{
//                     delay: 3500, // Time between slides in ms
//                     disableOnInteraction: false, // Continue autoplay after user interaction
//                 }}

//                 // Coverflow effect settings
//                 effect={'coverflow'}
//                 coverflowEffect={{
//                     rotate: 50, // Slide rotate in degrees
//                     stretch: 0, // Stretch space between slides (in px)
//                     depth: 100, // Depth perspective (in px)
//                     modifier: 1, // Effect multiplier
//                     slideShadows: true, // Enable slide shadows
//                 }}

//                 // Responsive breakpoints
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 2,
//                         spaceBetween: 20,
//                         coverflowEffect: {
//                             rotate: 30, // Adjust for smaller screens
//                             depth: 80,
//                         }
//                     },
//                     768: {
//                         slidesPerView: 3,
//                         spaceBetween: 30,
//                         coverflowEffect: {
//                             rotate: 40, // Adjust for medium screens
//                             depth: 100,
//                         }
//                     },
//                     1024: { // Added for larger screens
//                         slidesPerView: 3.5, // Slightly more than 3 slides visible
//                         spaceBetween: 40,
//                         coverflowEffect: {
//                             rotate: 50,
//                             depth: 120,
//                         }
//                     }
//                 }}
                
//                 // Navigation and Pagination
//                 pagination={{ clickable: true }} 
//                 navigation 
                
//                 // Class for custom styling
//                 className="mySwiper h-auto" // Set height to auto, or a fixed height if preferred
//             >
//                 {swiperInterface.map((item, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="card-item-content flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
//                             <img 
//                                 src={item.src} 
//                                 alt={item.name} 
//                                 className="w-full h-48 object-cover rounded-md mb-4 shadow-md" // Improved image styling
//                             />
//                             <h4 className="text-xl font-semibold text-emerald-700 mb-2">
//                                 {item.name}
//                             </h4>
//                             <p className="text-gray-600 text-center text-sm">
//                                 {item.description}
//                             </p>
//                         </div>
//                     </SwiperSlide>    
//                 ))}
//             </Swiper>
//         </div>
//     );
// }

// export default SwiperTimeline;


import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow, Autoplay, Parallax } from 'swiper/modules';

const swiperInterface = [
    { 
        id: 1, 
        name: "Full-Stack Developer", 
        description: "Architecting scalable systems with cutting-edge technologies, from responsive frontends to robust cloud infrastructure.",
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        icon: "💻",
        skills: ["React", "Node.js", "AWS", "TypeScript"]
    },
    { 
        id: 2, 
        name: "UX/UI Designer", 
        description: "Crafting intuitive digital experiences through human-centered design principles and innovative visual storytelling.",
        src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&auto=format",
        gradient: "from-pink-400 via-rose-500 to-orange-500",
        icon: "🎨",
        skills: ["Figma", "Prototyping", "Design Systems", "User Research"]
    },
    { 
        id: 3, 
        name: "Content Strategist", 
        description: "Transforming complex ideas into compelling narratives that resonate with audiences and drive meaningful engagement.",
        src: "https://images.unsplash.com/photo-1661286178487-b8b6d0217427?w=600&h=400&fit=crop&auto=format",
        gradient: "from-emerald-400 via-teal-500 to-cyan-600",
        icon: "✍️",
        skills: ["Content Strategy", "SEO", "Analytics", "Brand Voice"]
    },
    { 
        id: 4, 
        name: "Growth Marketer", 
        description: "Accelerating business growth through data-driven strategies, innovative campaigns, and performance optimization.",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
        gradient: "from-violet-400 via-purple-500 to-indigo-600",
        icon: "📈",
        skills: ["Digital Marketing", "A/B Testing", "CRO", "Attribution"]
    },
    { 
        id: 5, 
        name: "AI Specialist", 
        description: "Pioneering the future with machine learning algorithms and artificial intelligence that revolutionizes industries.",
        src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&auto=format",
        gradient: "from-amber-400 via-orange-500 to-red-500",
        icon: "🤖",
        skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"]
    }
];

const SwiperTimeline = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            <div 
                className="absolute inset-0 opacity-30 transition-all duration-1000"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                        rgba(59, 130, 246, 0.15) 0%, 
                        rgba(147, 51, 234, 0.1) 25%, 
                        rgba(236, 72, 153, 0.05) 50%, 
                        transparent 70%)`
                }}
            />
            
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>

            <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
                <div className="w-full max-w-8xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block mb-6">
                            <div className="relative">
                                <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 tracking-tight">
                                    ELITE
                                </h1>
                                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl -z-10"></div>
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-light text-white/90 mb-8 tracking-wide">
                            Professional <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Excellence</span>
                        </h2>
                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
                        <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
                            Experience unparalleled expertise across diverse domains, where innovation meets precision in every project
                        </p>
                    </div>
                    
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Swiper
                            modules={[Pagination, Navigation, EffectCoverflow, Autoplay, Parallax]}
                            spaceBetween={60}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            parallax={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={800}
                            effect={'coverflow'}
                            coverflowEffect={{
                                rotate: 15,
                                stretch: 0,
                                depth: 300,
                                modifier: 1.5,
                                slideShadows: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 40,
                                },
                                768: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 50,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 60,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 70,
                                },
                                1536: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 80,
                                }
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                            pagination={{ 
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet !w-4 !h-4 !bg-white/20 !border-2 !border-white/30 !opacity-100',
                                bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r !from-blue-500 !to-purple-500 !border-white/50 !scale-125 !shadow-lg !shadow-blue-500/50'
                            }}
                            navigation={{
                                nextEl: '.custom-next',
                                prevEl: '.custom-prev',
                            }}
                            className="premium-swiper-advanced pb-20"
                        >
                            {swiperInterface.map((item, index) => (
                                <SwiperSlide key={index} className="pb-12">
                                    <div className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl transform transition-all duration-1000 group-hover:scale-105 group-hover:border-white/40 group-hover:shadow-3xl">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-1000`}></div>
                                        </div>
                                        
                                        <div className="relative z-10 p-10">
                                            <div className="relative mb-8">
                                                <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                                    <img 
                                                        src={item.src} 
                                                        alt={item.name}
                                                        className="w-full h-64 object-cover transform transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                    <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                                                    <div className="absolute top-4 right-4 text-3xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                                                        {item.icon}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="text-center space-y-6">
                                                <h3 className={`text-3xl font-bold text-white group-hover:bg-gradient-to-r group-hover:${item.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700`}>
                                                    {item.name}
                                                </h3>
                                                
                                                <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-500 text-base">
                                                    {item.description}
                                                </p>
                                                
                                                <div className="flex flex-wrap justify-center gap-3 mt-6">
                                                    {item.skills.map((skill, skillIndex) => (
                                                        <span 
                                                            key={skillIndex}
                                                            className={`px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm transition-all duration-500 hover:bg-gradient-to-r hover:${item.gradient} hover:text-white hover:border-white/40 hover:shadow-lg hover:scale-105`}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform rotate-45 group-hover:rotate-0 scale-75 group-hover:scale-100">
                                                <div className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full shadow-lg animate-pulse`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>    
                            ))}
                        </Swiper>
                        
                        <button className="custom-prev absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 group">
                            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        
                        <button className="custom-next absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 group">
                            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            </button>
                    </div>
                    
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/20">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-white/70 font-medium">
                                {swiperInterface[activeIndex]?.name} Active
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>
    );
}

export default SwiperTimeline;

