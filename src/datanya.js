import react, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from "react-router-dom";
import Detailpage from "./detailpage";
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
        <Router>
          {rs.map((data) => (
            <div className="alert alert-info">
              {data.title}
              <br />
              <Link to="detail/2">Detail</Link>
            </div>
          ))}
        </Router>
      </div>
    );
  }
}
