const BASE_URL = "http://localhost:4000/api/v1"

export const govermentEndpoints = {
    POST_CREATE_GOV_API: BASE_URL + "/goverment-signup",
    GET_NON_REGISTERED_INSTITUTES_API: BASE_URL + "/institute-applications",
    GET_REGISTERED_INSTITUTES_API: BASE_URL + "/approved-institute",
    PUT_APPROVE_INSTITUTE_API: BASE_URL + "/approve-institute"
  }

export const instituteEndpoints = {
    POST_CREATE_INSTITUTE_API: BASE_URL + "/institute-signup",
    PUT_DISPLAY_PICTURE_INSTITUTE_API: BASE_URL + "/updateDisplayPicture-institute",
    GET_NON_APPROVED_APPLICATIONS: BASE_URL + "/get-student-application",
    GET_APPROVED_APPLICATIONS: BASE_URL + "/get-approved-student",
    PUT_APPROVE_CERTIFICATE: BASE_URL + "/approve-certificate"
}  

export const studentEndpoints = {
    POST_CREATE_STUDENT_API: BASE_URL + "/student-signup",
    PUT_DISPLAY_PICTURE_STUDENT_API: BASE_URL + "/updateDisplayPicture-student",
    POST_CERTIFICATE_APPLICATION_API: BASE_URL + "/certificate-application",
    GET_CERTIFICATES_API: BASE_URL + "/get-all-certificate"
}