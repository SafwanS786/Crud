// import React, { useEffect, useState } from "react";
// import axios from "axios";
// export default function DummyAPI() {
//   const [dummydata, setDummydata] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const DummyDatatest = async () => {
//       try {
//         let data = "/dummy.json";
//         const response = await axios.get(data);
//         let d = response.data;
//         setDummydata(d);
//       } catch (error) {
//         console.log("❌ Error Fetching data is Not There", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     DummyDatatest();
//   }, []);
//   return (
//     <div>
//       <h1 className="text-2xl text-gray-500 font-bold">Dummy Data</h1>
//       {loading ? (
//         <p>Loading ....</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-8 ">
//           {dummydata.map((item, i) => {
//             return (
//               <div
//                 key={i}
//                 className="border border-[#f2f2f2] shadow-2xl rounded-2xl p-3 my-2"
//               >
//                 {/* <div>
//                   <h1>{item.title}</h1>
//                 </div> */}
//                 <div className="">
//                   <div className="">
//                     <h2 className="font-semibold">{item.title}</h2>
//                     <p>{item.description}</p>
//                     <small>{item.pubDate}</small>
//                     <p>Source: {item.source_id}</p>
//                     <img
//                       src={item.image_url}
//                       alt={item.title}
//                       className="w-64 h-40 object-cover my-2 rounded"
//                     />
//                     <a
//                       href={item.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Read more →
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Newspaper,
  Clock,
  ExternalLink,
  AlertCircle,
  Loader2,
  Tag,
  Image as ImageIcon,
} from "lucide-react";

export default function DummyAPI() {
  const [dummydata, setDummydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [curpage, setCurpage] = useState(1);
  const item = 6;

  let LastIndex = curpage * item;
  let FirstIndex = LastIndex - item;
  useEffect(() => {
    console.log("LastIndex", LastIndex);
    console.log("FirstIndex", FirstIndex);
  }, []);

  useEffect(() => {
    const DummyDatatest = async () => {
      try {
        setLoading(true);
        const data = "/dummy.json";
        const response = await axios.get(data);
        setDummydata(response.data);
        setError(null);
      } catch (error) {
        console.log("❌ Error Fetching data", error);
        setError("Unable to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    DummyDatatest();
  }, []);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-slate-700 text-xl font-semibold">
            Loading amazing content...
          </p>
          <p className="text-slate-500 text-sm mt-2">Please wait</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center">
          <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-800 mb-3">Oops!</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header Section */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-indigo-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-linear-to-br from-indigo-600 to-purple-600 p-3 rounded-2xl shadow-lg">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Content Hub
                </h1>
                <p className="text-slate-600 text-sm mt-1 font-medium">
                  Discover amazing stories • {dummydata.length} articles
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-indigo-700">
                Live
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 p-3 rounded-xl">
                <Newspaper className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">
                  Total Articles
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  {dummydata.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-purple-100">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">
                  Last Updated
                </p>
                <p className="text-2xl font-bold text-slate-900">Today</p>
              </div>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-6 border border-pink-100">
            <div className="flex items-center gap-3">
              <div className="bg-pink-100 p-3 rounded-xl">
                <Tag className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600 font-medium">Categories</p>
                <p className="text-2xl font-bold text-slate-900">Multiple</p>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummydata.slice(FirstIndex, LastIndex).map((item, i) => (
            <article
              key={i}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-indigo-200 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-56 bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 overflow-hidden">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon className="w-20 h-20 text-slate-300" />
                  </div>
                )}
                {/* linear Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                {item.category && (
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-indigo-700 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    {item.category}
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Date & Source */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-xs">
                    <Clock className="w-4 h-4" />
                    <time className="font-medium">
                      {formatDate(item.pubDate)}
                    </time>
                  </div>
                  {item.source_id && (
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.source_id}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors leading-tight">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-5 line-clamp-3 leading-relaxed">
                  {item.description ||
                    "Explore this fascinating article to learn more about the topic and discover valuable insights."}
                </p>

                {/* Read More Button */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                  >
                    <span>Read Full Story</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {dummydata.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-12 max-w-md mx-auto">
              <Newspaper className="w-24 h-24 text-slate-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-700 mb-3">
                No Content Yet
              </h3>
              <p className="text-slate-500">
                Articles will appear here once loaded
              </p>
            </div>
          </div>
        )}
        <div className="flex justify-center mt-10 gap-2">
          <button
            onClick={() => setCurpage((prev) => Math.max(prev - 1, 1))}
            disabled={curpage === 1}
            className="px-4 py-2 bg-sky-500 text-white rounded-lg disabled:bg-gray-400 cursor-pointer"
          >
            prev
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-indigo-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-slate-600 font-medium">
              Content Hub • Powered by Shafwan Shaikh
            </p>
            <p className="text-slate-400 text-sm mt-2">
              © {new Date().getFullYear()} • All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
