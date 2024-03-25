import { Form, Formik } from "formik";

import { Layout } from "@/components/Layout";
import Head from "next/head";
import { FormInput } from "@/components/Form/Input";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Link from "next/link";
import { IoIosMail, IoIosCall } from "react-icons/io";

export type FormikForm = {
  name: string;
  contact: string;
  message: string;
  email: string;
};

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Dim Pictures</title>
        <meta name="description" content="Film Studio & Production House" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-center bg-white py-16">
          <Formik<FormikForm>
            initialValues={{
              contact: "",
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object().shape({
              contact: Yup.string().required("Required."),
              name: Yup.string().required("Required."),
              email: Yup.string()
                .email("Invalid Format.")
                .required("Required."),
              message: Yup.string().required("Required."),
            })}
            onSubmit={async (values, action) => {
              action.setSubmitting(true);
              const toaster = toast.loading("Submitting...");
              try {
                await fetch("/api/contact", {
                  method: "POST",
                  body: JSON.stringify(values),
                }).then((res) => {
                  if (res.ok) {
                    action.resetForm();
                    toast.update(toaster, {
                      type: "success",
                      render: () => `Submitted successfully!`,
                      icon: () => "🎉",
                      isLoading: false,
                      autoClose: 3000,
                    });
                  } else {
                    toast.update(toaster, {
                      type: "error",
                      render: () => {
                        return `Unknown Error Occured`;
                      },
                      icon: () => "🤯",
                      isLoading: false,
                      // autoClose: 4500,
                    });
                  }
                });
              } catch (err) {
                console.error(err);
                toast.update(toaster, {
                  type: "error",
                  render: () => {
                    return `Error: ${String(err)}`;
                  },
                  icon: () => "🤯",
                  isLoading: false,
                  autoClose: 4500,
                });
              } finally {
                action.setSubmitting(false);
              }
            }}
          >
            <Form className="flex w-full max-w-[300px] flex-grow flex-col gap-3 sm:max-w-[450px] lg:max-w-screen-sm">
              <p className="font-bebas text-[3rem] font-bold">Contact Us</p>
              <FormInput name="name" />
              <FormInput name="contact" />
              <FormInput name="email" />
              <FormInput name="message" as="textarea" />
              <button
                type="submit"
                className="flex w-full flex-row justify-center bg-black py-2 text-center font-helvetica font-bold text-white"
              >
                Submit
              </button>
              <div className="mt-1 flex w-full flex-row items-center justify-start">
                <Link
                  href={"tel:016-2537015"}
                  className="flex flex-row items-center font-helvetica italic"
                >
                  <IoIosCall className="mr-1" size={20} />
                  016-2537015
                </Link>
              </div>
              <div className="-mt-1 flex w-full flex-row items-center justify-start">
                <Link
                  href={"mailto:dimndump@gmail.com"}
                  className="flex flex-row items-center font-helvetica italic"
                >
                  <IoIosMail size={20} className="mr-1" />
                  dimndump@gmail.com
                </Link>
              </div>
            </Form>
          </Formik>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
