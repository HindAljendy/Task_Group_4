import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Data {
  id: number;
  client_name: string;
  client_email: string;
  message_subject: string;
  message_description: string;
}
const MessageDetails = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState<Data>();
  const { id } = useParams();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    axios
      .get(`http://127.0.0.1:8000/api/message/${id}`, config)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="HJ_content">
        <div className="d-flex HJ_content_inbox_space">
          <div className="HJ_lineheight">
            <p className="HJ_Text_Message HJ_special_Color">{data?.client_name}</p>
            <p className="HJ_Text_Message">{data?.client_email}</p>
          </div>
        </div>
        <div>
          <p className="HJ_Text_Message  HJ_special_Color mt-4">{data?.message_subject}</p>
          <p className=" HJ_Text_Message mb-4">{data?.message_description} </p>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;
