import React, { useEffect, useState } from "react";
import {
  Newspaper,
  Clock,
  ExternalLink,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ApiExpNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const item = 6;

  const Lastitem = currentPage * item;
  const Firstitem = Lastitem - item;

  useEffect(() => {
    console.log("LastTime", Lastitem);
    console.log("Firstitem", Firstitem);
  }, []);
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        let saved = localStorage.getItem("newsData");
        if (saved) {
          setNews(JSON.parse(saved));
          setLoading(true);
        }
        const response = await fetch(
          "https://newsdata.io/api/1/latest?apikey=pub_d8f7aef89b68409596109c3a1e08442b&q=gujarat"
        );
        const data = await response.json();
        const slicedNews = data.results || [];
        setNews(slicedNews);
        localStorage.setItem("newsData", JSON.stringify(slicedNews));
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNewsData();
  }, []);
  useEffect(() => {
    let check = news.length / item;
    console.log("Length is:", check);
    let b = Math.ceil(check);
    console.log("B how many", b);
  }, [news]);
  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600 text-lg">Loading latest news...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Oops!</h2>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Newspaper className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Gujarat News
              </h1>
              <p className="text-slate-600 text-sm mt-1">
                Latest updates from Gujarat
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(Firstitem, Lastitem).map((article, index) => (
            <article
              key={article.article_id || index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-linear-to-br from-blue-100 to-slate-100 overflow-hidden">
                {article.image_url ? (
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-slate-300" />
                  </div>
                )}
                {/* Category Badge */}
                {article.category && article.category[0] && (
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category[0]}
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-5">
                {/* Date */}
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  <time>{formatDate(article.pubDate)}</time>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {article.description ||
                    "No description available for this article."}
                </p>

                {/* Source & Link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-500">
                    {article.source_id || "Unknown Source"}
                  </span>
                  {article.link && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {news.length === 0 && !loading && (
          <div className="text-center py-16">
            <Newspaper className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              No News Found
            </h3>
            <p className="text-slate-500">Check back later for updates</p>
          </div>
        )}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Prev
          </button>

          <span className="text-slate-700 font-medium">
            Page {currentPage} of {Math.ceil(news.length / item)}
            {/* {console.log("NewsLength", news)} */}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(news.length / item))
              )
            }
            disabled={currentPage === Math.ceil(news.length / item)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-600 text-sm">
          <p>
            Powered by shaikh.io • Updated {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  );
}
