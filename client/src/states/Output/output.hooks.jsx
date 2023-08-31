import { useRecoilValue, useSetRecoilState } from 'recoil'
import OutputState from './output.state.jsx'
import { uuid } from '../../services/app.service.jsx'

const useAddOutput = () => {
    const setOutput = useSetRecoilState(OutputState)
    return (label, data) => {
        //let final = cloneDeep()
        //console.log('test', label, data);
        setOutput((prev) => [
            ...prev,
            {
                outputId: uuid(),
                label: label,
                data: data,
            },
        ])
    }
}

const useRemoveOutput = () => {
    const setOutput = useSetRecoilState(OutputState)
    return (outputId) => setOutput((prev) => prev.filter((item) => item.outputId !== outputId))
}

const useClearOutput = () => {
    const setOutput = useSetRecoilState(OutputState)
    return () => setOutput([])
}

const useOutput = () => {
    return useRecoilValue(OutputState)
}

export { useOutput, useAddOutput, useRemoveOutput, useClearOutput }
