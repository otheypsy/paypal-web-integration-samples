import { useNavigation } from 'react-router-dom'
import { useBusy } from '../states/Busy/busy.hooks.jsx'
import BusyIndicator from '../../lib/components/other/BusyIndicator/BusyIndicator.component'

const BusyModal = () => {
    const navigation = useNavigation()
    const busy = useBusy()
    return busy.length > 0 || navigation === 'loading' ? <BusyIndicator /> : null
}

export default BusyModal
