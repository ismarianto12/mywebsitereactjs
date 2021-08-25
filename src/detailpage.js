import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detailpage() {
  const id = useParams();
  const [rs, seData] = useState([]);

  // this.state = { loading: true };

  const url = "https://jsonplaceholder.typicode.com/albums/" + id;
  const getallData = async () => {
    const { data } = await axios.get(`${url}`);
    const rs = data;
    seData(rs);
    // console.log(products);
  };
  useEffect(() => {
    getallData();
  }, []);
  return <h3>${rs.title}</h3>;
}
