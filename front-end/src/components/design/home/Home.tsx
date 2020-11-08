import { Box, Button, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/core';
import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

export function Home(): ReactElement {
    const randomColor = () => {
        const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'purple'];

        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <SimpleGrid columns={2} spacing={10} mr="30px" ml="30px" mt="50px">
            <Button
                as={Link}
                {...{ to: '/swipe' }}
                height="100px"
                variant="outline"
                variantColor={randomColor()}
                size="lg"
            >
                {' '}
                Swipe{' '}
            </Button>
            <Button
                as={Link}
                {...{ to: '/list' }}
                height="100px"
                variant="outline"
                variantColor={randomColor()}
                size="lg"
            >
                {' '}
                List{' '}
            </Button>
            <Button
                as={Link}
                {...{ to: '/rate' }}
                height="100px"
                variant="outline"
                variantColor={randomColor()}
                size="lg"
            >
                {' '}
                Rate{' '}
            </Button>
        </SimpleGrid>
    );
}
