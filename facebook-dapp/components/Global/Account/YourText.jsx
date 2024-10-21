import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

//INTERNAL IMPRT
import { shortenAddress } from "../../../utils/utils";

//COMPONENT
const InputComponent = ({
  first,
  second,
  handleClickOne,
  handleClickTwo,
  placeholderOne,
  placeholderTwo,
}) => (
  <div class="row">
    <div class="col-lg-6 mb-3">
      <div class="form-group">
        <label class="mont-font fw-600 font-xsss">{first}</label>
        <input
          placeholder={placeholderOne}
          onChange={handleClickOne}
          type="text"
          class="form-control"
        />
      </div>
    </div>

    <div class="col-lg-6 mb-3">
      <div class="form-group">
        <label class="mont-font fw-600 font-xsss">{second}</label>
        <input
          placeholder={placeholderTwo}
          onChange={handleClickTwo}
          type="text"
          class="form-control"
        />
      </div>
    </div>
  </div>
);

const YourText = ({ userAddress }) => {
  //NOTIFICATION
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [formInput, updateFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    website: "",
    instragram: "",
    country: "",
    address: "",
    city: "",
    postalcode: "",
    biography: "",
  });

  const [displayUser, setDisplayUser] = useState({});

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("YOUR_DETAIL"));
    setDisplayUser(userDetails);
  }, []);

  console.log(displayUser);

  const handleFormFieldChange = (fileName, e) => {
    setForm({ ...form, [fileName]: e.target.value });
  };

  const saveDetails = () => {
    localStorage.setItem("YOUR_DETAIL", JSON.stringify(formInput));
    notifySuccess("Profile update successfully");
  };

  return (
    <div class="main-content bg-lightblue theme-dark-bg right-chat-active">
      <div class="middle-sidebar-bottom">
        <div class="middle-sidebar-left">
          <div class="middle-wrap">
            <div class="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div class="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                <h4 class="font-xs text-white fw-600 ms-4 mb-0 mt-2">
                  Account Details
                </h4>
              </div>
              <div class="card-body p-lg-5 p-4 w-100 border-0 ">
                <div class="row justify-content-center">
                  <div class="col-lg-4 text-center">
                    <figure class="avatar ms-auto me-auto mb-0 mt-2 w100">
                      <img
                        src="images/you.png"
                        alt="image"
                        class="shadow-sm rounded-3 w-100"
                      />
                    </figure>
                    <h2 class="fw-700 font-sm text-grey-900 mt-3">
                      {displayUser?.firstName} {displayUser?.lastName}
                    </h2>
                    <h4 class="text-grey-500 fw-500 mb-3 font-xsss mb-4">
                      {shortenAddress(userAddress)}
                    </h4>
                  </div>
                </div>

                <form action="#">
                  <InputComponent
                    handleClickOne={(e) =>
                      updateFormInput({
                        ...formInput,
                        firstName: e.target.value,
                      })
                    }
                    handleClickTwo={(e) =>
                      updateFormInput({
                        ...formInput,
                        lastName: e.target.value,
                      })
                    }
                    placeholderOne={displayUser?.firstName}
                    placeholderTwo={displayUser?.lastName}
                    first={" First Name"}
                    second={"Last Name"}
                  />
                  <InputComponent
                    handleClickOne={(e) =>
                      updateFormInput({
                        ...formInput,
                        email: e.target.value,
                      })
                    }
                    handleClickTwo={(e) =>
                      updateFormInput({
                        ...formInput,
                        phone: e.target.value,
                      })
                    }
                    placeholderOne={displayUser?.email}
                    placeholderTwo={displayUser?.phone}
                    first={"Email"}
                    second={"Phone"}
                  />
                  <InputComponent
                    handleClickOne={(e) =>
                      updateFormInput({
                        ...formInput,
                        website: e.target.value,
                      })
                    }
                    handleClickTwo={(e) =>
                      updateFormInput({
                        ...formInput,
                        instragram: e.target.value,
                      })
                    }
                    placeholderOne={displayUser?.website}
                    placeholderTwo={displayUser?.instragram}
                    first={" Website"}
                    second={"Instragram"}
                  />

                  <InputComponent
                    handleClickOne={(e) =>
                      updateFormInput({
                        ...formInput,
                        county: e.target.value,
                      })
                    }
                    handleClickTwo={(e) =>
                      updateFormInput({
                        ...formInput,
                        address: e.target.value,
                      })
                    }
                    placeholderOne={displayUser?.country}
                    placeholderTwo={displayUser?.address}
                    first={"  Country"}
                    second={" Address"}
                  />
                  <InputComponent
                    handleClickOne={(e) =>
                      updateFormInput({
                        ...formInput,
                        city: e.target.value,
                      })
                    }
                    handleClickTwo={(e) =>
                      updateFormInput({
                        ...formInput,
                        postalcode: e.target.value,
                      })
                    }
                    placeholderOne={displayUser?.city}
                    placeholderTwo={displayUser?.postalcode}
                    first={" Twon / City"}
                    second={"Postalcode"}
                  />
                  <div class="row">
                    <div class="col-lg-12 mb-3">
                      <label class="mont-font fw-600 font-xsss">
                        Description
                      </label>
                      <textarea
                        onChange={(e) =>
                          updateFormInput({
                            ...formInput,
                            biography: e.target.value,
                          })
                        }
                        class="form-control mb-0 p-3 h100 bg-greylight lh-16"
                        rows="5"
                        placeholder={displayUser?.biography}
                        spellcheck="false"
                      ></textarea>
                    </div>

                    <div class="col-lg-12">
                      <a
                        onClick={() => saveDetails()}
                        class="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block"
                      >
                        Save
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourText;
