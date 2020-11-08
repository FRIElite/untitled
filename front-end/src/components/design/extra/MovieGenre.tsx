import { Box } from '@chakra-ui/core';
import React, { ReactElement } from 'react';

export function MovieGenre({ ...props }: any): ReactElement {
    return (
        <Box
            {...props}
            border="1px solid #9F7AEA"
            mb="5px"
            borderRadius="4px"
            padding="0px 4px 0px 4px"
            fontWeight="500"
            color="#9F7AEA"
            fontSize={10}
            textTransform="capitalize"
        />
    );
}
