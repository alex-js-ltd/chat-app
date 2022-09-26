import {
    createContext,
    FC,
    cloneElement,
    useContext,
    useState,
    ReactElement,
} from 'react'

import { Alert, Modal, View } from 'react-native'

const callAll =
    (...fns: any) =>
    (...args: any) =>
        fns.forEach((fn: any) => fn && fn(...args))

const ModalContext = createContext<[isOpen: boolean, setIsOpen: Function] | []>(
    []
)

const ModalComp: FC<{ children: ReactElement[] }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ModalContext.Provider value={[isOpen, setIsOpen]}>
            {children}
        </ModalContext.Provider>
    )
}

const ModalButton: FC<{ children: ReactElement }> = ({ children: child }) => {
    const [isOpen, setIsOpen] = useContext(ModalContext)

    if (!setIsOpen) {
        return null
    }

    return cloneElement(child, {
        onPress: callAll(() => setIsOpen(!isOpen), child.props.onPress),
    })
}

const ModalContentsBase: FC<{ children: ReactElement }> = ({ children }) => {
    const [isOpen, setIsOpen] = useContext(ModalContext)

    if (!setIsOpen) {
        return null
    }

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
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'pink',
                }}
            >
                {children}
            </View>
        </Modal>
    )
}

export { ModalComp, ModalButton, ModalContentsBase }
