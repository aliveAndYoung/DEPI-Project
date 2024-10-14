import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./style.css";
import {  useNavigate } from "react-router-dom";

const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});
const RegisterSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AuthForm = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center bg-image tw-bg-cover tw-bg-no-repeat tw-bg-center tw-p-4 tw-relative">
            <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-30"></div>
            <div className="tw-relative tw-w-full tw-max-w-md lg:tw-max-w-5xl tw-h-[700px] lg:tw-h-[500px] tw-z-10 tw-overflow-hidden">
                <div
                    className={`tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-transition-all tw-duration-700 tw-ease-in-out tw-transform
                        ${
                            isRegistering
                                ? "-tw-translate-x-full"
                                : "tw-translate-x-0"
                        }`}
                >
                    <div className="tw-w-full tw-h-full tw-flex tw-flex-col lg:tw-flex-row">
                        <div className="tw-w-full tw-h-full tw-flex tw-flex-col lg:tw-flex-row -tw-mr-4 tw-pr-4">
                            <div className="tw-w-full lg:tw-w-1/2 tw-h-3/5 lg:tw-h-full tw-bg-white tw-bg-opacity-25 tw-backdrop-filter tw-backdrop-blur-sm tw-p-4 lg:tw-p-8 tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-t-2xl lg:tw-rounded-l-2xl lg:tw-rounded-tr-none tw-shadow-lg">
                                <div className="tw-w-full tw-max-w-sm tw-mx-auto">
                                    <h2 className="tw-text-3xl tw-font-bold tw-text-white tw-mb-6 tw-text-center lg:tw-text-left">
                                        Welcome Back
                                    </h2>
                                    <Formik
                                        initialValues={{
                                            email: "mockUser@gmail.com",
                                            password: "123456",
                                        }}
                                        validationSchema={SignInSchema}
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            console.log(values);
                                            if(values.email === "mockUser@gmail.com" && values.password === "123456"){
                                                navigate("/")}else{
                                                    alert("Invalid email or password")
                                                }



                                            setSubmitting(false);
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form className="tw-space-y-4">
                                                <div>
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white tw-bg-opacity-25 tw-border tw-border-white tw-border-opacity-40 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-opacity-60 tw-transition tw-text-white tw-placeholder-white tw-placeholder-opacity-75"
                                                    />
                                                    {errors.email &&
                                                    touched.email ? (
                                                        <div className="tw-text-red-300 tw-text-sm tw-mt-1">
                                                            {errors.email}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <Field
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white tw-bg-opacity-25 tw-border tw-border-white tw-border-opacity-40 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-opacity-60 tw-transition tw-text-white tw-placeholder-white tw-placeholder-opacity-75"
                                                    />
                                                    {errors.password &&
                                                    touched.password ? (
                                                        <div className="tw-text-red-300 tw-text-sm tw-mt-1">
                                                            {errors.password}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="tw-w-full tw-bg-white tw-bg-opacity-35 hover:tw-bg-opacity-45 tw-text-white tw-py-3 tw-rounded-lg tw-font-semibold tw-transition tw-mt-4"
                                                >
                                                    Sign In
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>

                            <div className="tw-w-full lg:tw-w-1/2 tw-h-2/5 lg:tw-h-full tw-bg-white tw-bg-opacity-15 tw-backdrop-filter tw-backdrop-blur-sm tw-text-white tw-p-4 lg:tw-p-8 tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-b-2xl lg:tw-rounded-r-2xl lg:tw-rounded-bl-none tw-shadow-lg">
                                <div className="tw-w-full tw-max-w-sm tw-mx-auto tw-text-center">
                                    <h2 className="tw-text-3xl tw-font-bold tw-mb-4">
                                        New Here?
                                    </h2>
                                    <p className="tw-mb-8 tw-text-gray-200">
                                        Sign up and discover a great amount of
                                        new opportunities!
                                    </p>
                                    <button
                                        onClick={() => setIsRegistering(true)}
                                        className="tw-border-2 tw-border-white tw-border-opacity-60 tw-text-white tw-py-2 tw-px-6 tw-rounded-full hover:tw-bg-white hover:tw-bg-opacity-25 tw-transition"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-flex tw-transition-all tw-duration-700 tw-ease-in-out tw-transform
                        ${
                            isRegistering
                                ? "tw-translate-x-0"
                                : "tw-translate-x-full"
                        }`}
                >
                    <div className="tw-w-full tw-h-full tw-flex tw-flex-col lg:tw-flex-row">
                        <div className="tw-w-full tw-h-full tw-flex tw-flex-col lg:tw-flex-row -tw-ml-4 tw-pl-4">
                            <div className="tw-w-full lg:tw-w-1/2 tw-h-2/5 lg:tw-h-full tw-bg-white tw-bg-opacity-15 tw-backdrop-filter tw-backdrop-blur-sm tw-text-white tw-p-4 lg:tw-p-8 tw-flex tw-flex-col tw-justify-center tw-items-center tw-order-2 lg:tw-order-1 tw-rounded-b-2xl lg:tw-rounded-l-2xl lg:tw-rounded-br-none tw-shadow-lg">
                                <div className="tw-w-full tw-max-w-sm tw-mx-auto tw-text-center">
                                    <h2 className="tw-text-3xl tw-font-bold tw-mb-4">
                                        One of Us?
                                    </h2>
                                    <p className="tw-mb-8 tw-text-gray-200">
                                        If you already have an account, just
                                        sign in. We've missed you!
                                    </p>
                                    <button
                                        onClick={() => setIsRegistering(false)}
                                        className="tw-border-2 tw-border-white tw-border-opacity-60 tw-text-white tw-py-2 tw-px-6 tw-rounded-full hover:tw-bg-white hover:tw-bg-opacity-25 tw-transition"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <div className="tw-w-full lg:tw-w-1/2 tw-h-3/5 lg:tw-h-full tw-bg-white tw-bg-opacity-25 tw-backdrop-filter tw-backdrop-blur-sm tw-p-4 lg:tw-p-8 tw-flex tw-flex-col tw-justify-center tw-items-center tw-order-1 lg:tw-order-2 tw-rounded-t-2xl lg:tw-rounded-r-2xl lg:tw-rounded-tl-none tw-shadow-lg">
                                <div className="tw-w-full tw-max-w-sm tw-mx-auto">
                                    <h2 className="tw-text-3xl tw-font-bold tw-text-white tw-mb-6 tw-text-center lg:tw-text-left">
                                        Create Account
                                    </h2>
                                    <Formik
                                        initialValues={{
                                            name: "",
                                            email: "",
                                            password: "",
                                        }}
                                        validationSchema={RegisterSchema}
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            console.log(values);
                                            setSubmitting(false);
                                        }}
                                    >
                                        {({ errors, touched }) => (
                                            <Form className="tw-space-y-4">
                                                <div>
                                                    <Field
                                                        name="name"
                                                        type="text"
                                                        placeholder="Name"
                                                        className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white tw-bg-opacity-25 tw-border tw-border-white tw-border-opacity-40 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-opacity-60 tw-transition tw-text-white tw-placeholder-white tw-placeholder-opacity-75"
                                                    />
                                                    {errors.name &&
                                                    touched.name ? (
                                                        <div className="tw-text-red-300 tw-text-sm tw-mt-1">
                                                            {errors.name}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <Field
                                                        name="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white tw-bg-opacity-25 tw-border tw-border-white tw-border-opacity-40 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-opacity-60 tw-transition tw-text-white tw-placeholder-white tw-placeholder-opacity-75"
                                                    />
                                                    {errors.email &&
                                                    touched.email ? (
                                                        <div className="tw-text-red-300 tw-text-sm tw-mt-1">
                                                            {errors.email}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <div>
                                                    <Field
                                                        name="password"
                                                        type="password"
                                                        placeholder="Password"
                                                        className="tw-w-full tw-p-3 tw-rounded-lg tw-bg-white tw-bg-opacity-25 tw-border tw-border-white tw-border-opacity-40 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-white focus:tw-ring-opacity-60 tw-transition tw-text-white tw-placeholder-white tw-placeholder-opacity-75"
                                                    />
                                                    {errors.password &&
                                                    touched.password ? (
                                                        <div className="tw-text-red-300 tw-text-sm tw-mt-1">
                                                            {errors.password}
                                                        </div>
                                                    ) : null}
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="tw-w-full tw-bg-white tw-bg-opacity-35 hover:tw-bg-opacity-45 tw-text-white tw-py-3 tw-rounded-lg tw-font-semibold tw-transition tw-mt-4"
                                                >
                                                    Sign Up
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
