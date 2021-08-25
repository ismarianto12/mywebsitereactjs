import react, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// const header = () => <form action="" method="POST"></form>;

// ambil line untuk compile datas
export default function Datanya(props) {
  const [rs, seData] = useState([]);

  this.state = { loading: true };

  const url = "https://jsonplaceholder.typicode.com/albums";
  const getallData = async () => {
    const { data } = await axios.get(`${url}`);
    const rs = data;
    seData(rs);
    // console.log(products);
  };
  useEffect(() => {
    getallData();
  }, []);

  if (this.state.loading === false) {
    return <tt>Loading ....</tt>;
  } else {
    return (
      <div>
        {rs.map((data) => (
          <div className="alert alert-info">
            {data.title}
            <br />
            <a href="">Detail</a>
          </div>
        ))}
      </div>
    );
  }
}
