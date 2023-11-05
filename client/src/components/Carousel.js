  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  }

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  }

  return (
    <div className="w-full relative">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentImage * 100}%)` }}>


        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <a href={image.a}>
              <img src={image.p} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
            </a>
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 border-none bg-gray-800 w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white hidden md:block">
        &lt;
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 border-none bg-gray-800 w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white hidden md:block">
        &gt;
      </button>
      <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 border-none bg-gray-800 w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white block md:hidden">
        &lt;
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 border-none bg-gray-800 w-10 text-black p-2 rounded-full opacity-75 hover:opacity-100 bg-white block md:hidden">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;