import React from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { toast } from "react-toastify";

function CreateCreditForm({ setIsShowModal, isCreateLoading, setCard, cards }) {
  const { data: session } = useSession();
  const axiosAuth = useAxiosAuth();

  const onSubmit = async (values, actions) => {
    try {
      const response = await axiosAuth.post("/creditCard", {
        ...values,
        customerId: session.userId,
      });
      const data = await response.data;
      const updatedCard = [data, ...cards];
      setCard(updatedCard);
      toast.success("Başarıyla Eklendi");
      setIsShowModal(false);
    } catch (error) {}
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlurs,
    setFieldValue,
  } = useFormik({
    initialValues: {
      cardHoldername: "",
      cardNumber: "",
      expireMonth: "",
      expireYear: "",
    },
    onSubmit,
  });

  const inputs = [
    {
      id: 1,
      name: "cardHoldername",
      type: "text",
      placeholder: "Your Holder Name Title",
      value: values.cardHoldername,
      errorMessage: errors.cardHoldername,
      touched: touched.cardHoldername,
    },
    {
      id: 2,
      name: "cardNumber",
      type: "text",
      placeholder: "Your Card Number",
      value: values.cardNumber,
      errorMessage: errors.cardNumber,
      touched: touched.cardNumber,
    },
    {
      id: 3,
      name: "expireMonth",
      type: "numeric",
      placeholder: "Expire Month",
      value: values.expireMonth,
      errorMessage: errors.expireMonth,
      touched: touched.expireMonth,
    },
    {
      id: 4,
      name: "expireYear",
      type: "numeric",
      placeholder: "Expire Year",
      value: values.expireYear,
      errorMessage: errors.expireYear,
      touched: touched.expireYear,
    },
  ];
  return (
    <div>
      {" "}
      <div className={"modal show"} style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Credit Card
              </h5>
              <button
                onClick={() => setIsShowModal(false)}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {inputs.map((input) => (
                  <div key={input.id} className="form-group">
                    <label htmlFor={input.id}>{input.name}</label>

                    <Input
                      id={input.id}
                      name={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={input.value}
                      errorMessage={input.errorMessage}
                      touched={input.touched}
                      onChange={handleChange}
                      handleBlur={handleBlurs}
                      className="form-control"
                      errorContent={
                        <div
                          class="invalid-feedback"
                          style={{ display: "flex" }}
                        >
                          {input.errorMessage}
                        </div>
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <Button
                  type={"submit"}
                  content={"Kaydet"}
                  isLoading={isCreateLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCreditForm;
