import AddressItem from "@/components/address/AddressItem";
import CreateAddressForm from "@/components/address/CreateAddressForm";
import CreateCreditForm from "@/components/creditCart/CreateCreditForm";
import UpdateAddressForm from "@/components/address/UpdateAddressForm";
import BreadcrumbNavigation from "@/components/layout/BreadcrumbNavigation";
import RootLayout from "@/components/layout/RootLayout";
import Button from "@/components/ui/Button";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { addressSchema } from "@/schema/address";
import addressService from "@/services/AddressService";
import { useFormik } from "formik";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CreditCardItem from "@/components/creditCart/CreditCardItem";
import axiosInstance from "@/config/axiosInstance";
const CheckoutPage = ({ data, addressData, creditCardData }) => {
  const axiosAuth = useAxiosAuth();
  const router = useRouter();
  const { data: session } = useSession();

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowCreditCartModal, setIsShowCreditCartModal] = useState(false);

  const [isShowUpdateModal, setIsShowUpdateModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [country, setCountry] = useState([]);
  const [cards, setCard] = useState(creditCardData);

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [isCreateLoading, setIsCreateLoading] = useState(false);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [address, setAddress] = useState(addressData);

  const fetchByIdAddress = async (id) => {
    const response = await addressService.getByIdAddress(id);
    const data = await response.data;
    const responseCity = await addressService.getCityByCountryId(
      data.countryId
    );
    const cityData = await responseCity.data;
    setCities(cityData);

    const responseDistrict = await addressService.getDistrictByCityId(
      data.cityId
    );
    const districtData = await responseDistrict.data;
    setDistricts(districtData);

    setFieldValue("addressTitle", data.addressTitle);
    setFieldValue("phoneNumber", data.phoneNumber);
    setFieldValue("fullAddress", data.fullAddress);
    setFieldValue("identityNumber", data.identityNumber);

    setFieldValue("country", data.countryId);
    setFieldValue("city", data.cityId);
    setFieldValue("city", data.cityId);
    setFieldValue("district", data.districtId);

    setIsShowUpdateModal(true);
  };

  useEffect(() => {
    const fetchCountry = async () => {
      const data = (await addressService.getCountry()).data;
      setCountry(data);
    };

    if (isShowModal && country.length === 0) {
      fetchCountry();
    }

    if (isShowUpdateModal && country.length === 0) {
      fetchCountry();
    }
  }, [isShowModal, isShowUpdateModal, country]);

  const deleteAddressItem = (addressId) => {
    addressService.deleteAddress(addressId);

    setAddress(address.filter((address) => address.id !== addressId));
  };

  const handleCountryChange = async (event) => {
    handleChange(event);
    const response = await addressService.getCityByCountryId(
      event.target.value
    );

    const data = await response.data;

    setCities(data);
  };

  const handleCityChange = async (event) => {
    handleChange(event);
    const response = await addressService.getDistrictByCityId(
      event.target.value
    );

    const data = await response.data;

    setDistricts(data);
  };

  const handlePayment = async (event) => {
    event.preventDefault();
    const { couponCode = "" } = router.query;
    if (selectedAddress === null) {
      toast.error("Bir Address Seçmelisiniz");
      return;
    }

    setIsPaymentLoading(true);

    if (couponCode !== "" && selectedCard !== null) {
      createPayment(
        {
          customerId: session.userId,
          addressId: selectedAddress,
          totalAmount: data.discountedTotalAmount,
        },
        couponCode
      );
    } else if (selectedCard !== null) {
      createPayment(
        {
          customerId: session.userId,
          addressId: selectedAddress,
          totalAmount: data.discountedTotalAmount,
        },
        couponCode
      );
    } else {
      const response = await createPayment(
        {
          customerId: session.userId,
          addressId: selectedAddress,
          totalAmount: data.discountedTotalAmount,
        },
        couponCode
      );

      const res = await response.data;
      setIsPaymentLoading(false);
      router.replace(res.paymentPageUrl);
    }
  };

  function createPayment(paymentsRequest, couponCode) {
    if (couponCode !== "" && selectedCard !== null) {
      try {
        axiosAuth.post(`/paymnets`, {
          ...paymentsRequest,
          discountCode: couponCode,
          creditCartId: selectedCard,
        });
      } catch (error) {
        toast.error("Beklenmedik Bir Hata Oluştu");
      }
      router.push("/paymentsuccessful");
    } else if (couponCode !== "") {
      return axiosAuth.post(`/paymnets`, {
        ...paymentsRequest,
        discountCode: couponCode,
      });
    } else if (selectedCard !== null) {
      try {
        axiosAuth.post(`/paymnets`, {
          ...paymentsRequest,
          creditCartId: selectedCard,
        });

        router.push("/paymentsuccessful");
      } catch (error) {
        toast.error("Beklenmedik Bir Hata Oluştu");
      }
      router.push("/paymentsuccessful");
    } else {
      return axiosAuth.post(`/paymnets`, {
        ...paymentsRequest,
      });
    }
  }
  const onSubmit = async (values, actions) => {
    setIsCreateLoading(true);
    try {
      const response = await addressService.addAddress(
        session.userId,
        values.district,
        values.city,
        values.fullAddress,
        values.addressTitle,
        values.phoneNumber,
        values.identityNumber
      );

      setIsCreateLoading(false);
      setIsShowModal(false);
      toast.success("Address Başarıyla eklendi");
      const addressResponse = await addressService.getByCustomerIdAddress(
        session.userId
      );

      const addressData = await addressResponse.data;
      setAddress(addressData);
      actions.resetForm();
    } catch (error) {
      setIsCreateLoading(false);
      toast.success("Beklenmedik bir hataa oluştu");
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
      addressTitle: "",
      phoneNumber: "",
      fullAddress: "",
      country: "",
      city: "",
      district: "",
      identityNumber: "",
    },
    onSubmit,
    validationSchema: addressSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "addressTitle",
      type: "text",
      placeholder: "Your Address Title",
      value: values.addressTitle,
      errorMessage: errors.addressTitle,
      touched: touched.addressTitle,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "text",
      placeholder: "Your Phone number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "identityNumber",
      type: "numeric",
      placeholder: "Your Identity number",
      value: values.identityNumber,
      errorMessage: errors.identityNumber,
      touched: touched.identityNumber,
    },
  ];

  return (
    <RootLayout>
      <div>
        <BreadcrumbNavigation navigation={["products", "checkout"]} />
        <section className="checkout spad">
          <div className="container">
            <div className="checkout__form">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <h5 className="mb-4">Kayıtlı Adreslerim</h5>

                  <div className="row">
                    {address.map((address) => (
                      <div
                        key={address.id}
                        className="col-lg-6"
                        onClick={() => setSelectedAddress(address.id)}
                      >
                        <AddressItem
                          isSelected={address.id === selectedAddress}
                          address={address}
                          deleteAddressItem={deleteAddressItem}
                          fetchByIdAddress={fetchByIdAddress}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="row">
                    <div
                      className="col-lg-12"
                      onClick={() => setIsShowModal(!isShowModal)}
                    >
                      <Button content={"NEW ADDRESSS"}></Button>
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="col-lg-12"
                      onClick={() => setIsShowCreditCartModal(!isShowModal)}
                    >
                      <Button content={"NEW CREDİT CARD"}></Button>
                    </div>
                  </div>

                  <div className="row">
                    {cards.map((card) => (
                      <div
                        key={card.id}
                        className="col-lg-6"
                        onClick={() => setSelectedCard(card.id)}
                      >
                        <CreditCardItem
                          isSelected={card.id === selectedCard}
                          cards={card}
                        />
                      </div>
                    ))}
                  </div>
                  {isShowCreditCartModal && (
                    <CreateCreditForm
                      cards={cards}
                      setIsShowModal={setIsShowCreditCartModal}
                      setCard={setCard}
                    />
                  )}
                  {isShowModal && (
                    <CreateAddressForm
                      inputs={inputs}
                      handleSubmit={handleSubmit}
                      setIsShowModal={setIsShowModal}
                      values={values}
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                      handleCityChange={handleCityChange}
                      handleCountryChange={handleCountryChange}
                      isCreateLoading={isCreateLoading}
                      handleBlur={handleBlur}
                      country={country}
                      cities={cities}
                      districts={districts}
                    />
                  )}
                  {isShowUpdateModal && (
                    <UpdateAddressForm
                      inputs={inputs}
                      handleSubmit={handleSubmit}
                      setIsShowModal={setIsShowUpdateModal}
                      values={values}
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                      handleCityChange={handleCityChange}
                      handleCountryChange={handleCountryChange}
                      handleBlur={handleBlur}
                      country={country}
                      cities={cities}
                      districts={districts}
                    />
                  )}
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4 className="order__title">Your order</h4>
                    <div className="checkout__order__products">
                      Product <span>Total</span>
                    </div>
                    <ul className="checkout__total__products">
                      {data.shoppingCartItemDtos?.map((item, index) => (
                        <li key={item.id}>
                          {index + 1}. {item.productName}{" "}
                          <span>$ {item.totalPrice}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="checkout__total__all">
                      <li>
                        Subtotal <span>${data.totalAmount}</span>
                      </li>
                      <li>
                        Total <span>${data.discountedTotalAmount}</span>
                      </li>
                    </ul>
                    <Button
                      onClick={handlePayment}
                      content={"PLACE ORDER"}
                      type={"submit"}
                      isLoading={isPaymentLoading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
};

export async function getServerSideProps({ req, query }) {
  const session = await getSession({ req });
  const { couponCode = "" } = query;
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  axiosInstance.defaults.headers[
    "Authorization"
  ] = `Bearer ${session?.accessToken}`;

  const { userId } = session;
  let response;
  if (couponCode === "") {
    response = await axiosInstance.get(`/shopping-carts?customerId=${userId}`);
  } else {
    response = await axiosInstance.post("/apply-shopping-carts", {
      customerId: userId,
      discountCode: couponCode,
    });
  }

  const addressResponse = await axiosInstance.get(
    `/address/findByCustomerId?customerId=${userId}`
  );
  const creditCardResponse = await axiosInstance.get(
    `/creditCard?customerId=${userId}`
  );
  const addressData = await addressResponse.data;
  const creditCardData = await creditCardResponse.data;
  const data = await response.data;

  return {
    props: {
      data,
      addressData,
      creditCardData,
    },
  };
}

export default CheckoutPage;
