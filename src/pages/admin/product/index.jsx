import AdminRootLayout from "@/components/admin/adminLayout/AdminRootLayout";
import CreateProductForm from "@/components/admin/product/CreateProductForm";
import { productSchema } from "@/schema/product";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import categoryService from "../../../services/CategoryService";
import brandService from "../../../services/BrandService";
import axios from "axios";
import productService from "@/services/ProductService";
import axiosInstance from "@/config/axiosInstance";
import { toast } from "react-toastify";
import { useIntl } from "react-intl";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getSession } from "next-auth/react";

const AdminProduct = ({ productData }) => {
  const [isShowCreateModal, setIsShowCreateModal] = useState(false);
  const [categories, setCategory] = useState([]);
  const [brands, setBrand] = useState([]);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProduct] = useState(productData);
  const intl = useIntl();

  const axiosAuth = useAxiosAuth();

  useEffect(() => {
    const fetchCountry = async () => {
      const data = (await categoryService.getCategories()).data;
      setCategory(data);
    };

    if (isShowCreateModal && categories.length === 0) {
      fetchCountry();
    }
  }, [isShowCreateModal, categories]);

  const onSubmit = async (values, actions) => {
    setIsLoading(true);
    let formData = new FormData();
    const json = JSON.stringify(values);
    const blob = new Blob([json], {
      type: "application/json",
    });
    formData.append("createProductRequest", blob);
    formData.append("file", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axiosAuth.post("/products", formData, config);

      const data = response.data;
      const updatedProducts = [data, ...products];
      setProduct(updatedProducts);
      toast.success(intl.formatMessage({ id: "product-add" }));
      setIsShowCreateModal(false);
      setIsLoading(false);
      actions.resetForm();
    } catch (error) {
      toast.error("Sadece Admin Ekleyebilir");
      setIsLoading(false);
    }
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      quantity: "",
      categoryId: "",
      brandId: "",
    },
    onSubmit,
    validationSchema: productSchema,
  });

  const handleCategoryChange = async (event) => {
    handleChange(event);
    const response = await brandService.getByCategoryId(event.target.value);

    const data = await response.data;

    setBrand(data);
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Product Name",
      value: values.name,
      errorMessage: errors.name,
      touched: touched.name,
    },
    {
      id: 2,
      name: "description",
      type: "text",
      placeholder: "Description",
      value: values.description,
      errorMessage: errors.description,
      touched: touched.description,
    },
    {
      id: 3,
      name: "price",
      type: "number",
      placeholder: "Price",
      value: values.price,
      errorMessage: errors.price,
      touched: touched.price,
    },
    {
      id: 4,
      name: "quantity",
      type: "number",
      placeholder: "Quantity",
      value: values.quantity,
      errorMessage: errors.quantity,
      touched: touched.quantity,
    },
  ];

  return (
    <>
      <AdminRootLayout />
      <div className="admin-content">
        <div>
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper">
                <div className="table-title">
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>
                        Manage <b>Products</b>
                      </h2>
                    </div>
                    <div className="col-sm-6">
                      <a
                        onClick={() => setIsShowCreateModal(!isShowCreateModal)}
                        className="btn btn-success"
                        data-toggle="modal"
                      >
                        <i className="material-icons"></i>{" "}
                        <span>Add New Product</span>
                      </a>
                    </div>
                  </div>
                </div>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Price</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Category Name</th>
                      <th>Brand Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.price} $</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.categoryName}</td>
                        <td>{product.brandName}</td>
                        <td>
                          <a className="edit" data-toggle="modal">
                            <i className="fa fa-pencil"></i>
                          </a>
                          <a className="delete" data-toggle="modal">
                            <i className="fa fa-eraser"></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <div className="clearfix">
                  <div className="hint-text">
                    Showing <b>5</b> out of <b>25</b> entries
                  </div>
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a href="#">Previous</a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        Next
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowCreateModal && (
        <CreateProductForm
          inputs={inputs}
          handleSubmit={handleSubmit}
          setIsShowModal={setIsShowCreateModal}
          values={values}
          handleChange={handleChange}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleCategoryChange={handleCategoryChange}
          categories={categories}
          brands={brands}
          setFile={setFile}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  const response = await axiosInstance.get("/products");
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/admin/adminLogin",
        permanent: false,
      },
    };
  }

  const productData = await response.data.content;
  return {
    props: {
      productData,
    },
  };
}

export default AdminProduct;
