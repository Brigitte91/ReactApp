/* eslint-disable */
import { Input } from '@chakra-ui/react'

export const TextInput = ({ changeFn, ...props }) => {
    return (

        <Input onChange={changeFn} variant={'filled'} focusBorderColor='teal.700' {...props} />

    )
}