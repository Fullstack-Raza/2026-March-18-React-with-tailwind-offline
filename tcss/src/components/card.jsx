// import React from "react";

// const Card = (e) => {
//   console.log(e);

//   return (
//     <div className=" m-2 rounded border  border-yellow-300 px-5 py-3  bg-blue-800  w-50">
//       <h1>
//         {e.fullName},<br/>
//         {e.bio}<br/>
//         {e.likes}<br/>
//         {e.posts}<br/>
//         {e.views}<br/>
//       </h1>
//     </div>
    
//   );
// };

// export default Card;
import React from "react";

const Card = ({ profilePicture, fullName, bio, likes, posts, views }) => {
  return (
    <div className="w-72 bg-white rounded-3xl shadow-lg p-4">

      
      <div className="relative">
        <div className="h-32 bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl"></div>

        {/* Follow Button */}
        <button className="absolute top-3 right-3 bg-white px-4 py-1 rounded-full shadow text-sm font-medium">
          Follow +
        </button>

        {/* Avatar */}
        <div className="absolute -bottom-8 left-4">
          <img
            src={profilePicture}
            alt={fullName}
            className="w-17 h-17 rounded-full border-4 border-white shadow object-cover "
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 px-2">
        <h2 className="text-lg font-semibold">{fullName}</h2>
        <p className="text-sm text-gray-500 mt-1">{bio}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mt-4 border-t pt-4 text-sm">
        <div>
          <p className="font-semibold">{likes}</p>
          <p className="text-gray-500">Likes</p>
        </div>
        <div>
          <p className="font-semibold">{posts}</p>
          <p className="text-gray-500">Posts</p>
        </div>
        <div>
          <p className="font-semibold">{views}</p>
          <p className="text-gray-500">Views</p>
        </div>
      </div>

      {/* Icons */}
      <div className="flex justify-around mt-4 pt-4 border-t text-gray-500 text-lg">
        <span>📷</span>
        <span>✖️</span>
        <span>🌐</span>
      </div>
    </div>
  );
};

export default Card;
