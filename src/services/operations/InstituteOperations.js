import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";
import { instituteEndpoints } from "../apis";

const {
    POST_CREATE_INSTITUTE_API,
    PUT_DISPLAY_PICTURE_INSTITUTE_API,
    GET_NON_APPROVED_APPLICATIONS,
    GET_APPROVED_APPLICATIONS,
    PUT_APPROVE_CERTIFICATE,
    Get_Institutes
} = instituteEndpoints;

export const RegisteredInst = async () => {
    const toastId = toast.loading("Loading...");
    const url = `${Get_Institutes}`;
    let result = [];
    try {
        const response = await apiConnector("GET", url);
        console.log("All the registered institutes are .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot get all registered institutes error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const createInstitute = async (values) => {
    const toastId = toast.loading("Loading...");
    let result = null;
    try {
        const response = await apiConnector("POST", POST_CREATE_INSTITUTE_API, values);
        console.log("Created institute .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot create institutes error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const dpInstitute = async (id) => {
    const toastId = toast.loading("Loading...");
    const url =`${PUT_DISPLAY_PICTURE_INSTITUTE_API}?id=${id}`
    let result = null;
    try {
        const response = await apiConnector("PUT", url);
        console.log("DP of institute .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot chage Dp of institutes error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const getNonApprovedApplications = async (id) => {
    const toastId = toast.loading("Loading...");
    const url =`${GET_NON_APPROVED_APPLICATIONS}?id=${id}`
    let result = [];
    try {
        const response = await apiConnector("GET", url);
        console.log("Non approved applications .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot get non approved appliactions error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const getApprovedApplications = async (id) => {
    const toastId = toast.loading("Loading...");
    const url =`${GET_APPROVED_APPLICATIONS}?id=${id}`
    let result = [];
    try {
        const response = await apiConnector("GET", url);
        console.log("Approved applications .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot get approved appliactions error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};

export const approveCertificate = async (id,aplid) => {
    const toastId = toast.loading("Loading...");
    const url =`${PUT_APPROVE_CERTIFICATE}?id=${id}&aplid=${aplid}`
    let result = null;
    try {
        const response = await apiConnector("PUT", url);
        console.log("Approve certificate .....", response);
        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }
        result = response.data;
    } catch (error) {
        console.log("Cannot approve certificate error ......", error);
        result = error.response.data;
    }
    toast.dismiss(toastId);
    return result;
};