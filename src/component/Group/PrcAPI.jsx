import React, { useEffect, useState } from "react";
import axios from "axios";
export default function PrcAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        let PostData = "https://jsonplaceholder.typicode.com/posts";
        const response = await axios.get(PostData);
        setData(response.data);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  useEffect(() => {
    localStorage.setItem("Post", JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    setTimeout(() => {
      let getDatafromLocal = localStorage.getItem("Post");
      if (getDatafromLocal) {
        setData(JSON.parse(getDatafromLocal));
        setLoading(false);
      }
      console.log("data is there or not", getDatafromLocal);
    }, 2000);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">API Data</h1>
      {loading ? (
        <p>Loading.....</p>
      ) : (
        <ul>
          {data.slice(0, 5).map((item) => (
            <li key={item.id} className="mb-2 border p-2 rounded">
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
