  import React, { useEffect, useState } from "react";
  import {
    User,
    Mail,
    Phone,
    Globe,
    MapPin,
    Building2,
    Loader2,
  } from "lucide-react";

  export default function ApiExample({ theme = "light" }) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const GetData = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const data = await response.json();
          let slc = data.slice(0, 9);
          setUsers(slc);
          setError(null);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Failed to load users. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      GetData();
    }, []);
    useEffect(() => {
      let openQuestion = null;

      function toggleQuestion(index) {
        if (openQuestion === index) {
          openQuestion = null; // close it
        } else {
          openQuestion = index; // open that one
        }
        console.log("Now open question:", openQuestion);
      }

      toggleQuestion(0);
      toggleQuestion(0);
      toggleQuestion(1);
      toggleQuestion(1);
    }, []);
    const isDark = theme === "dark";

    if (loading) {
      return (
        <div
          className={`min-h-screen ${
            isDark
              ? "bg-linear-to-br from-gray-900 to-gray-800"
              : "bg-linear-to-br from-blue-50 bg to-indigo-100"
          } flex items-center justify-center`}
        >
          <div className="text-center">
            <Loader2
              className={`w-12 h-12 animate-spin ${
                isDark ? "text-indigo-400" : "text-indigo-600"
              } mx-auto mb-4`}
            />
            <p
              className={`${isDark ? "text-gray-300" : "text-gray-600"} text-lg`}
            >
              Loading users...
            </p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div
          className={`min-h-screen ${
            isDark
              ? "bg-linear-to-br from-gray-900 to-gray-800"
              : "bg-linear-to-br from-blue-50 to-indigo-100"
          } flex items-center justify-center`}
        >
          <div
            className={`${
              isDark ? "bg-red-900/20 border-red-800" : "bg-red-50 border-red-200"
            } border rounded-lg p-6 max-w-md`}
          >
            <p
              className={`${
                isDark ? "text-red-400" : "text-red-600"
              } text-center`}
            >
              {error}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`min-h-screen ${
          isDark
            ? "bg-linear-to-br from-gray-900 to-gray-800"
            : "bg-linear-to-br from-blue-50 to-indigo-100"
        } py-12 px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={`inline-flex  items-center justify-center w-16 h-16 ${
                isDark ? "bg-indigo-500" : "bg-indigo-600"
              } rounded-full mb-4`}
            >
              <User className="w-8 h-8 text-white" />
            </div>
            <h1
              className={`text-4xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-2`}
            >
              User Directory
            </h1>
            <p
              className={`${isDark ? "text-gray-400" : "text-gray-600"} text-lg`}
            >
              Browse through our collection of {users.length} users
            </p>
          </div>

          {/* User Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className={`${
                  isDark ? "bg-gray-800 shadow-2xl" : "bg-white shadow-lg"
                } rounded-xl hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
              >
                {/* Card Header */}
                <div
                  className={`${
                    isDark
                      ? "bg-linear-to-r from-indigo-600 to-purple-700"
                      : "bg-linear-to-r from-indigo-500 to-purple-600"
                  } p-6 text-white`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{user.name}</h3>
                      <p
                        className={`${
                          isDark ? "text-indigo-200" : "text-indigo-100"
                        } text-sm`}
                      >
                        @{user.username}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start space-x-3">
                    <Mail
                      className={`w-5 h-5 ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      } mt-0.5 flex shrink-0`}
                    />
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Email
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-200" : "text-gray-900"
                        } break-all`}
                      >
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone
                      className={`w-5 h-5 ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      } mt-0.5 flex shrink-0`}
                    />
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Phone
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {user.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe
                      className={`w-5 h-5 ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      } mt-0.5 flex shrink-0`}
                    />
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Website
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-200" : "text-gray-900"
                        } break-all`}
                      >
                        {user.website}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin
                      className={`w-5 h-5 ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      } mt-0.5 flex shrink-0`}
                    />
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Address
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {user.address.street}, {user.address.suite}
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-200" : "text-gray-900"
                        }`}
                      >
                        {user.address.city}, {user.address.zipcode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Building2
                      className={`w-5 h-5 ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      } mt-0.5 flex shrink-0`}
                    />
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Company
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-100" : "text-gray-900"
                        } font-semibold`}
                      >
                        {user.company.name}
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-400" : "text-gray-600"
                        } text-sm italic`}
                      >
                        "{user.company.catchPhrase}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
