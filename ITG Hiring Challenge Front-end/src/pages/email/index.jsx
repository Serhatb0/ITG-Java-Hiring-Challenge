import RootLayout from "@/components/layout/RootLayout";
import styles from "./email.module.css";
import Image from "next/image";

const ActivationEmail = () => {
  return (
    <RootLayout>
      <div className={styles.container}>
        <Image
          src={"/images/logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <h1 className={styles.h1}>Hesap Aktivasyonu</h1>
        <p className={styles.p}>
          Bir hesap oluşturduğunuz için teşekkür ederiz. Lütfen email nizi
          kontrol edin
        </p>
        {/* <a className={styles.a} href="{{activationLink}}">
          Aktivasyon Linki Tekrar Gönder
        </a> */}
        <p className={styles.warning}>
          Bu e-posta, size özel bilgi içermektedir. Lütfen kimseyle
          paylaşmayınız.
        </p>
      </div>
    </RootLayout>
  );
};

export default ActivationEmail;
