import React from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

function CreateAddressForm({
  inputs,
  handleSubmit,
  setIsShowModal,
  values,
  handleChange,
  touched,
  errors,
  handleCityChange,
  handleCountryChange,
  isCreateLoading,
  handleBlur,
  country,
  cities,
  districts,
}) {
  return (
    <div>
      {" "}
      <div className={"modal show"} style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Address
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
                      handleBlur={handleBlur}
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

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea
                    value={values.fullAddress}
                    onChange={handleChange}
                    name="fullAddress"
                    className="form-control mb-3"
                    rows="3"
                    placeholder="Full Address"
                  ></textarea>
                  {touched.fullAddress && (
                    <div class="invalid-feedback" style={{ display: "flex" }}>
                      {errors.fullAddress}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>

                  <div className="row w3-margin-bottom">
                    <div className="col-md-12 col-xs-12">
                      <select
                        name="country"
                        value={values.country}
                        id="country"
                        className="form-control"
                        onChange={handleCountryChange}
                      >
                        <option value="">-- Country --</option>
                        {country.map((item) => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {touched.country && (
                        <div
                          class="invalid-feedback"
                          style={{ display: "flex" }}
                        >
                          {errors.country}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email1">Şehir ve İlçe</label>

                  <div className="row w3-margin-bottom">
                    <div className="col-md-6 col-xs-6">
                      <select
                        id="city"
                        name="city"
                        value={values.city}
                        className="form-control"
                        onChange={handleCityChange}
                      >
                        <option value="">-- City --</option>
                        {cities.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {touched.city && (
                        <div
                          class="invalid-feedback"
                          style={{ display: "flex" }}
                        >
                          {errors.city}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6 col-xs-6">
                      <select
                        id="region"
                        className="form-control"
                        name="district"
                        value={values.district}
                        onChange={handleChange}
                      >
                        <option value="">-- Region --</option>
                        {districts.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {touched.district && (
                        <div
                          class="invalid-feedback"
                          style={{ display: "flex" }}
                        >
                          {errors.district}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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

export default CreateAddressForm;
