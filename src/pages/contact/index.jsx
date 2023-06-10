import RootLayout from "@/components/layout/RootLayout";
import Button from "@/components/ui/Button";
import axiosInstance from "@/config/axiosInstance";
import { contactSchema } from "@/schema/contact";
import { useFormik } from "formik";
import { useState } from "react";
import { useIntl } from "react-intl";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const intl = useIntl();
  const onSubmit = async (values, actions) => {
    setIsLoading(true);

    try {
      axiosInstance.post("/email/sendAdmin", values);
      toast.success(intl.formatMessage({ id: "email-succes" }));
    } catch (error) {}
    actions.resetForm();

    setIsLoading(false);
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        content: "",
      },
      onSubmit,
      validationSchema: contactSchema,
    });

  return (
    <RootLayout>
      <div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103924.51406828833!2d40.72707134771971!3d37.31409398645805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400eedede21a0d6b%3A0x8feacb762699980!2sMardin%2C%20Turkey!5e0!3m2!1sen!2sus!4v1623165707247!5m2!1sen!2sus"
            height={500}
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="contact__text">
                  <div className="section-title">
                    <span>Information</span>
                    <h2>Contact Us</h2>
                    <p>
                      Merhaba! Size yardımcı olabilmek için buradayız. Herhangi
                      bir sorunuz, öneriniz veya geri bildiriminiz varsa, lütfen
                      aşağıdaki iletişim formunu doldurun. Mümkün olan en kısa
                      sürede sizinle iletişime geçeceğiz.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <h4>Türkiye</h4>
                      <p>
                        MARDİN <br />
                        +43 982-314-0958
                      </p>
                    </li>
                    <li>
                      <h4>France</h4>
                      <p>
                        109 Avenue Léon, 63 Clermont-Ferrand <br />
                        +12 345-423-9893
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="Name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          required
                          placeholder="Message"
                          defaultValue={""}
                          value={values.content}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="content"
                        />
                        <Button
                          isLoading={isLoading}
                          type="submit"
                          content={"Send Message"}
                          className="site-btn"
                        ></Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
};

export default ContactPage;
