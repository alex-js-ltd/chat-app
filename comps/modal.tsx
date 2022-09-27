import {
    createContext,
    FC,
    cloneElement,
    useContext,
    useState,
    ReactElement,
    useEffect,
} from 'react'

import { Alert, Modal } from 'react-native'
import { Container } from './library'

const callAll =
    (...fns: any) =>
    (...args: any) =>
        fns.forEach((fn: any) => fn && fn(...args))

const ModalContext = createContext<
    { isOpen: boolean; setIsOpen: Function } | undefined
>(undefined)

const ModalProvider: FC<{ children: ReactElement[] }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const value = { isOpen, setIsOpen }

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
}

const useModal = () => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error(`useModal must be used within a AuthContext provider`)
    }
    return context
}

const ModalButton: FC<{ children: ReactElement }> = ({ children: child }) => {
    const { isOpen, setIsOpen } = useModal()

    useEffect(() => {
        console.log('child', child.props)
    }, [child])

    return cloneElement(child, {
        onPress: callAll(() => setIsOpen(!isOpen), child.props.onPress),
    })
}

const ModalContentsBase: FC<{ children: ReactElement }> = ({ children }) => {
    const { isOpen, setIsOpen } = useModal()

    useEffect(() => {
        console.log('isOpen', isOpen)
    }, [isOpen])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.')
                setIsOpen(!isOpen)
            }}
        >
            <Container variant="modal">{children}</Container>
        </Modal>
    )
}

export { ModalProvider, ModalButton, ModalContentsBase }
