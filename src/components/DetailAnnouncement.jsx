import axios from "axios";
import * as React from "react";
import { useParams } from "react-router-dom";


export default function DetailAnnouncement () {
const { id } = useParams();

const baseURL = `https://nurul-iman-blok-m.herokuapp.com/api/v1/announcements/${id}`;
const [details, setDetailAnnouncement] = React.useState("");

React.useEffect(() => {
  axios.get(baseURL).then((response) => {
    setDetailAnnouncement(response.data);
  });
}, []);

  return (
    <div className="container">
      <h1>{details.title}</h1>
    </div>
  );
};