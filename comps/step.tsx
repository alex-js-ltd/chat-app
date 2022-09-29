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

    const [text, setText] = useState<string>('')

    const onChange = (
        e: NativeSyntheticEvent<TextInputChangeEventData>,
        input: RefObject<TextInput>
    ) => {
        if (e.nativeEvent.text.length === 1 && input.current) {
            setText((prevState) => prevState + e.nativeEvent.text)
            input.current.focus()
        }
    }

    const onChangeLastInput = (
        e: NativeSyntheticEvent<TextInputChangeEventData>
    ) => {
        if (e.nativeEvent.text.length === 1) {
            setText((prevState) => prevState + e.nativeEvent.text)
        }
    }

    useEffect(() => {
        if (text.length === 6) {
            run(data?.confirm(text))
        }
    }, [text])

    return (
        <Box flexDirection="row" justifyContent="space-between">
            <Input
                maxLength={1}
                onChange={(e) => onChange(e, input2)}
                variant="step"
            />
            <Input
                ref={input2}
                maxLength={1}
                onChange={(e) => onChange(e, input3)}
                variant="step"
            />

            <Input
                ref={input3}
                maxLength={1}
                onChange={(e) => onChange(e, input4)}
                onLayout={(e) => console.log(e.nativeEvent.layout)}
                variant="step"
            />

            <Input
                ref={input4}
                maxLength={1}
                onChange={(e) => onChange(e, input5)}
                variant="step"
            />
            <Input
                ref={input5}
                maxLength={1}
                onChange={(e) => onChange(e, input6)}
                variant="step"
            />
            <Input
                ref={input6}
                maxLength={1}
                onChange={(e) => onChangeLastInput(e)}
                variant="step"
            />
        </Box>
    )
}

export { Step }
