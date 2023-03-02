import { useFormik } from "formik";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { generateAIImage } from "../helper/api";
import { formValidate } from "../helper/validate";
import GeneratedImage from "./GeneratedImage";
import Spinner from "./Spinner";

const MainBody = () => {
  const [imageURL, setImageURL] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const formik = useFormik({
    initialValues: {
      prompt: "",
      size: "small",
    },
    validate: formValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (userData) => {
      setIsLoading(true);
      const genImage = await generateAIImage({
        prompt: userData.prompt,
        size: userData.size,
      });
      setImageURL(genImage);
      setIsLoading(false);
    },
  });

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="showcase">
        <form id="image-form" onSubmit={formik.handleSubmit}>
          <h1>Describe your custom image</h1>
          <div className="form-control">
            <input
              {...formik.getFieldProps("prompt")}
              type="text"
              id="prompt"
              placeholder="Enter Text"
            />
          </div>
          <div className="form-control">
            <select name="size" id="size" {...formik.getFieldProps("size")}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      {isLoading && <Spinner />}
      {imageURL && !isLoading && <GeneratedImage imageURL={imageURL} />}
    </main>
  );
};

export default MainBody;
