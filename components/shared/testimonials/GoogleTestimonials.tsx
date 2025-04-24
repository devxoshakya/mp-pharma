"use client";
// Description: This component displays Google reviews with a star rating system and a responsive layout.
export default function GoogleReviews() {
  const reviews = [
    {
      id: 1,
      name: "Mukesh Sharma",
      rating: 5,
      timeAgo: "2 weeks ago",
      content: "Hi i have startup of Cosmetics Brands.I am very satisfied with the product, My Client had many dark spots previous month and trust me, Now his skin texture is so much better than before. About the dark spots, no they are not completely gone yet, but surely have decreased. Will recommend everyone get the product and you'll see very satisfying results"
    },
    {
      id: 2,
      name: " Pawan Kumar",
      rating: 5,
      timeAgo: "2 weeks ago",
      content: "Good staff, always ready to cooperate .They are providing vast range of products in cosmetics,i like how they cooperate from customisation of design and quality of products best in their business.WISHING A GREAT SUCCESS TO THE COMPANY"
    },
    {
      id: 3,
      name: "Priyanka Mourya",
      rating: 5,
      timeAgo: "3 weeks ago",
      content: "Awesome range of products,,, we are manufacture in our product and Product quality and packing is so good .M P PHARMACEUTICALS best cosmetic MANUFACTURE IN in India. THANKU SO MUCH Director Mr. Lokesh and all the Staff are very cooperate"},
    {
      id: 4,
      name: "Preety Saxsena",
      rating: 5,
      timeAgo: "1 month ago",
      content: "Amazing product and value for money all the products gave good results.Timely commitment and great service.The sales team of this company was not only helpful but also friendly."
    },
    {
      id: 5,
      name: " Mohan Lal",
      rating: 5,
      timeAgo: "1 month ago",
      content: "We are dealing with M P PHARMA from last 4 years and all team members are very supportive and responsible. Our all products are of good quality. Designing team is also very talented."
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
          <p className="text-gray-600 text-sm">Based on 100+ Reviews</p>
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