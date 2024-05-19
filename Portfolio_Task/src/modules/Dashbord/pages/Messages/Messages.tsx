import axios from "axios";
import { useEffect, useState } from "react";
import "./Message.css";
import MessageDisplay from "../../components/MessageDisplay/MessageDisplay";
import { Link} from "react-router-dom";
import { ICONS } from "../../utils/icons-dash";

interface Data {
  id: number;
  client_name: string;
  client_email: string;
  message_subject: string;
  message_description: string;
}

const Messages = () => {

  const token = localStorage.getItem("token");

  const [messages, setMessages] = useState<Data[]>([]);

  const getAllMessages = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    axios
      .get("http://127.0.0.1:8000/api/message", config)
      .then((response) => {
        setMessages(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching messages: ", error);
      });
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  const deleteMessage = (id: number) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    axios
      .delete(`http://127.0.0.1:8000/api/message/${id}`, config)
      .then((response) => {
        console.log(response.data);
        getAllMessages();
      })
      .catch((error) => {
        console.error("Error Delete message: ", error);
      });
  };

  return (
    <div className="HJ_Messages">
      <div className="HJ_border-b">
        <div className="HJ_toolbar">
          <div>
            <h5>All Messages</h5>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="HJ_Myscroll">
          <div className="HJ_list">
            {messages.map((message: Data) => (
              <div
                key={message.id}
                className="HJ_item justify-content-between active d-flex"
              >
                <div>
                  <div className="HJ_part_names">
                    <div className="HJ_part_name_ms">
                      <div>
                        <span className="HJ_Text_Message">{message.client_name}</span>
                      </div>
                    </div>
                    <div className="ml-5 HJ_Text_Message">{message.client_email}</div>
                  </div>

                  <div className="HJ_part_photo_ms">
                    <p className="text-bold">{message.message_subject}</p>
                    <div className="d-flex">
                      <p className="HJ_Text_Message">{message.message_description.slice(0, 30)}...</p>
                    </div>
                  </div>
                  <div className="HJ_IconsAction">
                    <Link to={`/dashboard/messages/${message.id}`}>
                      <div className="HJ_IconMessage">
                        {ICONS.view}
                      </div>
                    </Link>
                    <button onClick={() => deleteMessage(message.id)}>
                      <div className="HJ_IconMessage">
                        {ICONS.delete}
                      </div>


                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MessageDisplay />
      </div>
    </div>
  );
};

export default Messages;

