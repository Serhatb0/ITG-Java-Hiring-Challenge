const CreditCardItem = ({ isSelected, cards }) => {
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

              <h6 className="card-title">
                <b>Card Holder Name:</b> {cards.cardHoldername}
              </h6>
              <h6 className="card-title">
                <b>Card Number:</b> {cards.cardNumber}
              </h6>
              <h6 className="card-text mb-2">
                <b>Card Expire Month: </b>
                {cards.expireMonth}
              </h6>
              <h6 className="card-text mb-2">
                <b>Card Expire Year: </b>
                {cards.expireYear}
              </h6>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-link text-decoration-none text-muted me-3"
                  type="button"
                >
                  Düzenle
                </button>
                <button
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

export default CreditCardItem;
