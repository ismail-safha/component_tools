import axios from "axios";
import { useState } from "react";
import "./upload.css";
const Upload = () => {
  const preset_key = "723923827213312";
  const cloud_name = "die0sjqsi";
  const [image, setImage] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    // fetch data
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="upload">
      <div className="upload_1">
        <input type="file" name="image" onChange={handleFile} />
        <br />
      </div>
    </div>
  );
};

export default Upload;
