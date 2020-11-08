import React, { ReactElement } from 'react';
import { Flex } from '@chakra-ui/core';

export const LoginBox = ({ ...props }: any): ReactElement => (
    <Flex
        {...props} 
        width="100%"
        direction="column"
        justify="center"
        alignItems="center"
        mt="50px"
    />
);
