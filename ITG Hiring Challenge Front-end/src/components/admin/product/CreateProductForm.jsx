import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React from "react";

function CreateProductForm({
  inputs,
  handleSubmit,
  setIsShowModal,
  values,
  handleChange,
  touched,
  errors,
  setFile,
  handleCategoryChange,
  isCreateLoading,
  handleBlur,
  categories,
  brands,
  isLoading,
}) {
  return (
    <div>
      {" "}
      <div className={"modal show"} style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Create Product
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
                  <label htmlFor="category">Category</label>

                  <div className="row w3-margin-bottom">
                    <div className="col-md-12 col-xs-12">
                      <select
                        name="categoryId"
                        value={values.categoryId}
                        id="category"
                        className="form-control"
                        onChange={handleCategoryChange}
                      >
                        <option value="">-- Category --</option>
                        {categories.map((item) => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {touched.categoryId && (
                        <div
                          class="invalid-feedback"
                          style={{ display: "flex" }}
                        >
                          {errors.categoryId}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="brand">Brands</label>

                  <div className="row w3-margin-bottom">
                    <div className="col-md-12 col-xs-12">
                      <select
                        name="brandId"
                        value={values.brandId}
                        id="brand"
                        className="form-control"
                        onChange={handleChange}
                      >
                        <option value="">-- Brand --</option>
                        {brands.map((item) => (
                          <option value={item.id} key={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {touched.brandId && (
                        <div
                          class="invalid-feedback"
                          style={{ display: "flex" }}
                        >
                          {errors.brandId}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <input
                  className="form-control"
                  type="file"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  required
                />
              </div>

              <div className="modal-footer border-top-0 d-flex justify-content-center">
                <Button
                  type={"submit"}
                  content={"Kaydet"}
                  isLoading={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProductForm;
