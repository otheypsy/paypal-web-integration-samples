import { useRecoilValue, useSetRecoilState } from 'recoil'
import ErrorState from './error.state.jsx'

const useSetError = () => {
    const setError = useSetRecoilState(ErrorState)
    return () => setError(true)
}

const useResetError = () => {
    const setError = useSetRecoilState(ErrorState)
    return () => setError(false)
}

const useError = () => {
    return useRecoilValue(ErrorState)
}

export { useError, useSetError, useResetError }
