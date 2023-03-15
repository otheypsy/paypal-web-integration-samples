import { useRecoilValue, useSetRecoilState } from 'recoil'
import BusyState from './BusyState'

const _uuid = () => {
    return crypto.randomUUID() || Date.now()
}

const _removeId = (prev, id) => {
    return prev.filter((item) => item.id !== id)
}

const _removeLast = (prev) => {
    const temp = [...prev]
    temp.pop()
    return temp
}

const useAddBusy = () => {
    const setBusy = useSetRecoilState(BusyState)
    return (id = undefined) => {
        setBusy((prev) => [
            ...prev,
            {
                id: id || _uuid(),
                custom: !!id,
            },
        ])
    }
}

const useRemoveBusy = () => {
    const setBusy = useSetRecoilState(BusyState)
    return (id = undefined) => {
        if (id) setBusy((prev) => _removeId(prev, id))
        else setBusy((prev) => _removeLast(prev))
    }
}

const useBusy = () => {
    return useRecoilValue(BusyState)
}

export { useBusy, useAddBusy, useRemoveBusy }
