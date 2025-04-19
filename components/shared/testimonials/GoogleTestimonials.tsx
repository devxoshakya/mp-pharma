"use client";
// Description: This component displays Google reviews with a star rating system and a responsive layout.
export default function GoogleReviews() {
  const reviews = [
    {
      id: 1,
      name: "Rupali Singh",
      rating: 5,
      timeAgo: "2 weeks ago",
      content: "They work with really good quality with good value. I am really satisfied with the service, its really professional and on time. Interior company team was extremely helpful, professional and experienced. They gave me good design suggestions and project execution went smoothly. Quality of their products and skill of their team was good. Specially thanks to Mr.Dishant aneja and kunal Overall happy and satisfied."
    },
    {
      id: 2,
      name: "Ayush Keshri",
      rating: 5,
      timeAgo: "2 weeks ago",
      content: "Quality of their products and skill of their team was good. Specially thanks to Mr.Dishant aneja and kunal Overall happy and satisfied."
    },
    {
      id: 3,
      name: "Andy Ayush",
      rating: 5,
      timeAgo: "3 weeks ago",
      content: "Great service and exceptional quality. The team was professional and delivered on time. Would highly recommend their services to anyone looking for reliability."
    },
    {
      id: 4,
      name: "Priya Sharma",
      rating: 4,
      timeAgo: "1 month ago",
      content: "Very satisfied with the work done. The attention to detail was impressive and the team was very responsive to our needs."
    },
    {
      id: 5,
      name: "Rajesh Kumar",
      rating: 5,
      timeAgo: "1 month ago",
      content: "Excellent experience from start to finish. The team was professional and the quality exceeded my expectations."
    }
  ];

  const renderStars = (rating : any) => {
    return Array(5).fill(0).map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header */}
      <div className="text-left mb-6">
        <h2 className="text-3xl font-bold mb-2">
          Our Clients Simply <span className="text-emerald-700">Love</span> Our Work
        </h2>
        <p className="text-emerald-600">
          Because building great customer relationships is the best business strategy.
        </p>
      </div>

      {/* Google Reviews Section */}
      <div className="flex flex-col md:flex-row items-start  gap-6">
        {/* Left side - Google logo and rating */}
        <div className="md:w-1/3 text-left">
          <div className="mb-4">
            <img src="/google.png" alt="Google Reviews" className="h-10" />
          </div>
          <div className="text-7xl font-bold text-gray-800">4.5</div>
          <div className="flex my-3">
            {renderStars(4)}
          </div>
          <p className="text-gray-600 text-sm">Based on 1296 Reviews</p>
        </div>

        {/* Right side - Reviews list with border only on desktop */}
        <div className="w-full md:w-2/3 border-0 md:border-l md:border-black pl-0 md:pl-6 h-96 overflow-y-auto scrollbar-hide">
          {reviews.map(review => (
            <div key={review.id} className="mb-6 pb-6 border-b border-black last:border-b-0">
              <div className="font-semibold text-emerald-800">{review.name}</div>
              <div className="flex items-center my-1">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500">{review.timeAgo}</span>
              </div>
              <p className="text-gray-700 mt-2">{review.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom CSS to hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}