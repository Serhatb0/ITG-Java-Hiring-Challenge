import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { decode } from "next-auth/jwt";
import axiosInstance from "@/config/axiosInstance";
const refreshAccessToken = async (token) => {
  try {
    const tokenResponse = await axios.post(
      "http://localhost:8080/api/v1/auth/refresh-token",
      {
        refreshToken: token.refreshToken,
      }
    );

    return {
      ...token,
      accessToken: tokenResponse.data.accessToken,
      accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse.data.refereshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
};

const providers = [
  CredentialsProvider({
    name: "Credentials",
    authorize: async (credentials) => {
      try {
        if (credentials.provider !== "ADMIN") {
          const user = await axiosInstance.post("/auth/login", {
            password: credentials.password,
            email: credentials.email,
          });

          if (user.data.token) {
            return user.data;
          }
          return null;
        } else {
          // ADMIN LOGİN
          const user = await axiosInstance.post("/auth/login", {
            password: credentials.password,
            email: credentials.email,
          });
          if (user.data.token) {
            return user.data;
          }
          return null;
        }
      } catch (e) {
        throw new Error(e.response.data.message);
      }
    },
  }),
];

const callbacks = {
  jwt: async ({ token, user }) => {
    if (user) {
      token.accessToken = user.token;
      token.accessTokenExpiry = user.accessTokenExpiry;
      token.refreshToken = user.refreshToken;
      token.userId = user.id;
    }

    if (token.accessTokenExpiry > Date.now()) {
      return Promise.resolve(token);
    }

    token = refreshAccessToken(token);
    return Promise.resolve(token);
  },
  session: async ({ session, token }) => {
    session.accessToken = token.accessToken;
    session.accessTokenExpiry = token.accessTokenExpiry;
    session.error = token.error;
    session.userId = token.userId;
    return Promise.resolve(session);
  },
};

export const options = {
  providers,
  callbacks,
  pages: {
    signIn: "/",
  },
  secret: "mysecret",
};

const Auth = (req, res) => NextAuth(req, res, options);
export default Auth;
