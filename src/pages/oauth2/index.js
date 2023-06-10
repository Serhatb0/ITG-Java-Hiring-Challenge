import { useRouter } from "next/router";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { signIn } from "next-auth/react";
const OAuth2RedirectHandler = ({ decoded }) => {
  const router = useRouter();

  const { token } = router.query;
  useEffect(() => {
    signIn("credentials", {
      redirect: false,
      provider: "google",
      token: token,
      ...decoded,
    });

    router.push("/");
  }, [token, decoded]);

  return <div></div>;
};

export async function getServerSideProps(context) {
  const { token } = context.query;
  const decoded = jwt.decode(token);

  return {
    props: { decoded },
  };
}
export default OAuth2RedirectHandler;
