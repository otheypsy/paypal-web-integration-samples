import { useRecoilValue, useSetRecoilState } from 'recoil'
import AppContextState from './appContext.state.jsx'

const useAddAppContext = () => {
    const setContext = useSetRecoilState(AppContextState)
    return (label, data) => {
        setContext((prev) => {
            return {
                ...prev,
                [label]: data,
            }
        })
    }
}

const useRemoveAppContext = () => {
    const setContext = useSetRecoilState(AppContextState)
    return (label) => setContext((prev) => prev.filter((item) => item.label !== label))
}

const useClearAppContext = () => {
    const setContext = useSetRecoilState(AppContextState)
    return () => setContext({})
}

const useAppContext = () => {
    return useRecoilValue(AppContextState)
}

export { useAppContext, useAddAppContext, useRemoveAppContext, useClearAppContext }
