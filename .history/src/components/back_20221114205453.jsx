// BACK HOME COMPONENT -  Usenavigate to route back to home page

import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="back">
      <button onClick={() => navigate("/")} style={{fontWeight: "600", fontSize: "1rem", color: "#00bb14", textDecoration: "none", marginBottom: "2rem", cursor: "pointer"}}>
        Back &#8592;
      </button>
    </div>
  );
};

export default Back;

.info--back {
  font-weight: 600;
  font-size: 1rem;
  color: #00bb14;
  text-decoration: none;
  margin-bottom: 2rem;
  cursor: pointer;
}

.info--back:hover {
  text-decoration: underline;
}