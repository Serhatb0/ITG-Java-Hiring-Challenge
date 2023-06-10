import axiosInstance from "@/config/axiosInstance";

class AddressService {
  addAddress(
    customerId,
    districtId,
    cityId,
    fullAddress,
    addressTitle,
    phoneNumber,
    identityNumber
  ) {
    return axiosInstance.post("/address", {
      customerId,
      districtId,
      cityId,
      fullAddress,
      addressTitle,
      phoneNumber,
      identityNumber,
    });
  }

  getByCustomerIdAddress(cutomerId) {
    return axiosInstance.get(
      `/address/findByCustomerId?customerId=${cutomerId}`
    );
  }

  deleteAddress(id) {
    return axiosInstance.delete(`/address?id=${id}`);
  }

  getByIdAddress(id) {
    return axiosInstance.get(`/address/findById?id=${id}`);
  }

  getCountry() {
    return axiosInstance.get("/countries");
  }

  getCityByCountryId(countryId) {
    return axiosInstance.get(`/cities/findByCountryId?countryId=${countryId}`);
  }

  getDistrictByCityId(districtId) {
    return axiosInstance.get(`/districts/findByCityId?cityId=${districtId}`);
  }
}

const addressService = new AddressService();
export default addressService;
