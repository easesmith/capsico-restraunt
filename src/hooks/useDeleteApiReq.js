import { handleLoading } from "@/store/slices/loadingSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../utils/axiosInstance";
import { toast } from "sonner";

const useDeleteApiReq = () => {
    const [res, setRes] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const fetchData = async (url, config = {}) => {
        try {
            setIsLoading(true);
            await dispatch(handleLoading(true));
            const response = await axiosInstance.delete(url, config);
            if (response.status === 200 || response.status === 201) {
                toast.success(response?.data?.message);
                setRes(response);
                console.log("delete api response", response);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred.")
            // if (error?.response.status === 403) {
            //     await dispatch(handleUnautorizedModalOpen({ isUnautorizedModalOpen: true }));
            // }
            // else {
            //     await dispatch(handleErrorModal({ isOpen: true, message: error.response?.data?.message || "An error occurred.", isLogoutBtn: true }));
            // }
        } finally {
            setIsLoading(false);
            await dispatch(handleLoading(false));
        }
    };

    return { res, isLoading, fetchData };


};

export default useDeleteApiReq;