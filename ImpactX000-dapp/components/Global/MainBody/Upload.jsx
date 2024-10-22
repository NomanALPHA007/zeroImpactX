import React from "react";

const Upload = ({ getRootProps, getInputProps, fileURL }) => {
  return (
    <form action="#">
      <div class="row">
        {!fileURL && (
          <div class="col-lg-12 mb-3">
            <div class="card mt-3 border-0">
              <div
                getRootProps
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

        {fileURL && <video controls src={fileURL}></video>}

        <div class="col-lg-12 mb-3">
          <label class="mont-font fw-600 font-xsss">Description</label>
          <textarea
            class="form-control mb-0 p-3 h100 bg-greylight lh-16"
            rows="5"
            placeholder="Write your message..."
            spellcheck="false"
          ></textarea>
        </div>

        <div class="col-lg-12">
          <a
            href="#"
            class="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
          >
            Create
          </a>
        </div>
      </div>
    </form>
  );
};

export default Upload;
