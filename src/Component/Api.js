import axios from "axios";
import React, { useEffect } from "react";

export default function Api() {
  const [data, setData] = useState(null);
  const url = "YOUR_API_URL";
  const payload = {};
  const token = "YOUR_TOKEN";

  useEffect(() => {
    const responseApi = async () => {
      try {
        const res = await axios.post(url, paylaod, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.responsebody);
      } catch (err) {
        console.log(err);
      }
    };
    responseApi();
  }, [url, payload, token]);

  return <div>{data}</div>;
}
