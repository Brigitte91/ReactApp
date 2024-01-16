/* eslint-disable */

import { Center, Image, Text } from '@chakra-ui/react'

export const DrinkItem = ({ drink, clickFn }) => {
    const clickHandler = () => {
        clickFn(drink);
    }

    return (

        <Center gap={16} onClick={clickHandler} cursor={'pointer'} w={300} mb={4} p={4} boxShadow={'md'} rounded={'md'} justifyContent={'center'} alignItems={'center'}>
            <Image src={drink.imgUrl} width={20} height={20} alt={drink.alt} />
            <Text fontSize={'xl'} color={'teal.500'}>{drink.name}</Text>

        </Center>


    );
};
