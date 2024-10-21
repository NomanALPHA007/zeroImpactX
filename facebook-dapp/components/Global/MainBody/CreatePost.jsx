import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import toast from "react-hot-toast";
import {
  AiOutlineEdit,
  AiOutlineVideoCameraAdd,
  AiOutlineCamera,
  AiOutlineFileText,
} from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { BsFillCloudUploadFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

//INTERNAL IMPRT
import { MainShareLink, Upload, BtnLoader } from "./index";
import { SOCAIL_MEDIA_Context } from "../../../context/context";

const postType = [
  {
    type: "Video",
    icon: <AiOutlineVideoCameraAdd />,
  },
  {
    type: "Image",
    icon: <HiPhotograph />,
  },
  {
    type: "Text",
    icon: <AiOutlineFileText />,
  },
];

const CreatePost = ({ setOpenCreatePost, CREATE_POST }) => {
  //CONTEXT DATA
  const { PINATA_API_KEY, PINATA_SECRECT_KEY, setLoader, loader } =
    useContext(SOCAIL_MEDIA_Context);

  //NOTIFICATION
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [fileURL, setFileURL] = useState("");
  const [uploadLoader, setUploadLoader] = useState(false);

  const [form, setForm] = useState({
    type: "",
    description: "",
  });

  const _calling_CreatePost = async () => {
    try {
      const { type, description } = form;

      if (!type || !description) {
        return console.log("provide all details");
      } else {
        await CREATE_POST(fileURL, type, description);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormFieldChange = (fileName, e) => {
    setForm({ ...form, [fileName]: e.target.value });
  };

  const uploadToInfura = async (file) => {
    if (file) {
      try {
        notifySuccess("Uploading to IPFS....");
        setUploadLoader(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          maxBodyLength: "Infinity",
          headers: {
            pinata_api_key: PINATA_API_KEY,
            pinata_secret_api_key: PINATA_SECRECT_KEY,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        console.log(response);
        setFileURL(ImgHash);
        setUploadLoader(false);
        notifySuccess("Uploaded to IPFS, successfully");
      } catch (error) {
        setUploadLoader(false);
        notifyError("Unable to upload image to Pinata, Check your API Keys");
        console.log("Unable to upload image to Pinata", error);
      }
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToInfura(acceptedFile[0]);
  }, []);

  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({ onDrop, maxSize: 500000000000 });

  return (
    <div class="middle-sidebar-left">
      <div class="middle-wrap">
        <div class="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
          <div class="card-body p-lg-5 p-4 w-100 border-0 ">
            <div class="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
              <div class="card-body p-0">
                <a
                  onClick={() => setOpenCreatePost(false)}
                  class="font-xssss fw-600 text-grey-500 card-body p-0 d-flex align-items-center"
                >
                  <i class="btn-round-sm font-xs text-primary  me-2 bg-greylight">
                    <AiOutlineClose />
                  </i>
                  Create Post
                </a>
              </div>

              <div class="card-body d-flex p-0 mt-0">
                {postType.map((type, index) => (
                  <a
                    onClick={() => setForm({ ...form, type: type.type })}
                    class="d-flex align-items-center font-xssss fw-600 ls-1 text-grey-700 text-dark pe-4"
                  >
                    <i
                      class={`font-md ${
                        type.type == "Video"
                          ? "text-danger"
                          : type.type == "Image"
                          ? "text-success"
                          : "text-warning"
                      }   me-2`}
                    >
                      {type.icon}
                    </i>
                    <span class="d-none-xs"> {type.type}</span>
                  </a>
                ))}
              </div>
            </div>

            <form action="#">
              <div class="row">
                {!fileURL && form.type != "Text" && (
                  <div class="col-lg-12 mb-3">
                    <div class="card mt-3 border-0">
                      <div
                        {...getRootProps()}
                        class="card-body d-flex justify-content-between align-items-end p-0"
                      >
                        <div class="form-group mb-0 w-100">
                          <input
                            {...getInputProps()}
                            type="file"
                            name="file"
                            id="file"
                            class="input-file"
                          />
                          <label
                            for="file"
                            class="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
                          >
                            <i class=" large-icon me-3 d-block">
                              <BsFillCloudUploadFill />
                            </i>
                            <span class="js-fileName">
                              Drag and drop or click to replace
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {fileURL && form.type == "Video" ? (
                  <video controls src={fileURL}></video>
                ) : fileURL && form.type == "Image" ? (
                  <img src={fileURL} alt="" />
                ) : (
                  ""
                )}

                <div class="col-lg-12 mb-3">
                  <label class="mont-font fw-600 font-xsss">Description</label>
                  <textarea
                    onChange={(e) => handleFormFieldChange("description", e)}
                    class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                    rows="5"
                    placeholder="Write your message..."
                    spellcheck="false"
                  ></textarea>
                </div>

                <div class="col-lg-12">
                  {uploadLoader ? (
                    <BtnLoader />
                  ) : (
                    <a
                      onClick={() => _calling_CreatePost()}
                      class="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                    >
                      Create
                    </a>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
