import { publicRequest } from "@/requestMethods"
import { updateError, updateStart, updateSuccess } from "./userSlice"

export const login = async (user, dispatch) => {
    dispatch(updateStart())

    try {
        const res = await publicRequest.post('auth/login', user)
        dispatch(updateSuccess(res.data))

        return res
    } catch (error) {
        dispatch(updateError())
        throw error
    }
}