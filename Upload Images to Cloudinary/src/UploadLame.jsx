import axios from "axios";
import { useState } from "react";

const UploadLame = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState();

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/die0sjqsi/image/upload",
        data
      );

      console.log(uploadRes);
      setImage(uploadRes.data.url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="">
        <label>Choose an image</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <img src={image} alt="" />
      </div>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default UploadLame;
