import { signIn } from "next-auth/react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingDots from "@/components/app/loading-dots";
import toast, { Toaster } from "react-hot-toast";

const pageTitle = "Login";
const logo = "/favicon.ico";
const description =
  "Platforms Starter Kit is a comprehensive template for building multi-tenant applications with custom domains.";

export default function Login() {
  const [loading, setLoading] = useState(false);

  //Get error message added by next/auth in URL.
  const { error } = useRouter().query;
  useEffect(() => {
    const errorMessage = Array.isArray(error) ? error.pop(error) : error;
    errorMessage && toast.error(errorMessage);
  }, [error]);

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={logo} />
        <link rel="shortcut icon" type="image/x-icon" href={logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={logo} />
        <meta name="theme-color" content="#7b46f6" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={logo} />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Elegance" />
        <meta name="twitter:creator" content="@StevenTey" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logo} />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <img
          className="w-auto h-12 mx-auto"
          src="/logo.png"
          alt="Platforms Starter Kit"
        />
        <h2 className="mt-6 text-3xl font-bold text-center text-gray-900">
          Therapios
        </h2>
        <p className="mt-2 text-sm text-center text-gray-600">
          Websites for therapists made simple. Take your online presence to the
          next level with our website builder for mental health professionals.
        </p>
      </div>

      <div className="w-11/12 mx-auto mt-8 sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow-md sm:rounded-lg sm:px-10">
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              signIn("github");
            }}
            className={`${
              loading ? "cursor-not-allowed bg-gray-600" : "bg-purple-900"
            } group flex justify-center items-center space-x-5 w-full sm:px-4 h-16 my-2 rounded-md focus:outline-none`}
          >
            {loading ? (
              <LoadingDots color="#fff" />
            ) : (
              <>
                <span className="mr-1 font-medium text-white">
                  Login with Github
                </span>
              </>
            )}
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
