import { confirmAlert } from "react-confirm-alert";

const AddressItem = ({
  isSelected,
  address,
  fetchByIdAddress,
  deleteAddressItem,
}) => {
  const deleteAddress = (addressId) => {
    confirmAlert({
      title: "Are you sure?",
      message: "Do you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteAddressItem(addressId);
          },
        },
        {
          label: "No",
          onClick: () => {
            // Silme işlemi iptal edildi
          },
        },
      ],
    });
  };

  return (
    <>
      <div className="container my-4">
        {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> */}
        <div className="col">
          <div className="card address-card">
            <div className="card-body">
              {isSelected === true ? (
                <i className="fa fa-check" style={{ marginLeft: "90%" }}></i>
              ) : (
                <i className="fa"></i>
              )}

              <h6 className="card-title">{address.addressTitle}</h6>
              <p className="card-text mb-2">{address.cityName}</p>
              <p className="card-text mb-2">{address.districtName}</p>
              <p className="card-text mb-2">{address.phoneNumber}</p>
              <p className="card-text mb-2">{address.countryName}</p>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-link text-decoration-none text-muted me-3"
                  type="button"
                  onClick={() => fetchByIdAddress(address.id)}
                >
                  Düzenle
                </button>
                <button
                  onClick={() => deleteAddress(address.id)}
                  className="btn btn-link text-decoration-none text-danger"
                  type="button"
                >
                  Sil
                </button>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressItem;
