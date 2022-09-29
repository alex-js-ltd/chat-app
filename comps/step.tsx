import React, { useState, FC, useEffect, useRef, RefObject } from 'react'
import { TextInput } from 'react-native'
import { Input, Box } from './library'

import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

const Step: FC<{ data: any; run: Function }> = ({ data, run }) => {
    const input2 = useRef<TextInput>(null)
    const input3 = useRef<TextInput>(null)
    const input4 = useRef<TextInput>(null)
    const input5 = useRef<TextInput>(null)
    const input6 = useRef<TextInput>(null)

    const [code, setCode] = useState<string[]>(['', '', '', '', '', ''])

    const onChange = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
        input: RefObject<TextInput>,
        index: number
    ) => {
        if (e.nativeEvent.text.length === 1 && input.current) {
            let arrCopy = [...code]

            let newElement = e.nativeEvent.text

            arrCopy[index] = newElement

            setCode(arrCopy)

            input.current.focus()
        }
    }

    const onChangeLastInput = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
        input: RefObject<TextInput>,
        index: number
    ) => {
        if (e.nativeEvent.text.length === 1 && input.current) {
            let arrCopy = [...code]

            let newElement = e.nativeEvent.text

            arrCopy[index] = newElement

            setCode(arrCopy)

            input.current.blur()
        }
    }

    useEffect(() => {
        if (!code.includes('')) {
            run(data?.confirm(code.join('')))
        }
        console.log(code.join(''))
    }, [code])

    return (
        <Box flexDirection="row" justifyContent="space-between">
            <Input
                maxLength={1}
                onChange={(e) => onChange(e, input2, 0)}
                variant="step"
                autoFocus={true}
                keyboardType="numeric"
            />
            <Input
                ref={input2}
                maxLength={1}
                onChange={(e) => onChange(e, input3, 1)}
                variant="step"
                keyboardType="numeric"
            />

            <Input
                ref={input3}
                maxLength={1}
                onChange={(e) => onChange(e, input4, 2)}
                variant="step"
                keyboardType="numeric"
            />

            <Input
                ref={input4}
                maxLength={1}
                onChange={(e) => onChange(e, input5, 3)}
                variant="step"
                keyboardType="numeric"
            />
            <Input
                ref={input5}
                maxLength={1}
                onChange={(e) => onChange(e, input6, 4)}
                variant="step"
                keyboardType="numeric"
            />
            <Input
                ref={input6}
                maxLength={1}
                onChange={(e) => onChangeLastInput(e, input6, 5)}
                variant="step"
                keyboardType="numeric"
            />
        </Box>
    )
}

export { Step }
