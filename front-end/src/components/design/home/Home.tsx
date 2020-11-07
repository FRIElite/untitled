import React, { ReactElement, useState } from 'react';
import { Flex, Heading, Box, Image } from '@chakra-ui/core';
import { LoadingIcon } from '../../icons/LoadingIcon';
import './home.css';

export function Home(): ReactElement {
    const [showMeme, setShowMeme] = useState(false);

    return (
        <Flex direction="row" justify="center" align="center" width="100%" paddingTop="30%">
            <Box onMouseOver={() => setShowMeme(true)} onMouseOut={() => setShowMeme(false)}>
                {showMeme ? (
                    <Image src="https://media3.giphy.com/media/lgcUUCXgC8mEo/giphy.gif" className="rick-roll" marginTop="-100px"/>
                ) : (
                    <>
                        <Heading position="relative" width="200px" display="flex" justifyContent="center">
                            Elite
                            <Box position="absolute" zIndex={-1} top={-100} left={-25}>
                                <LoadingIcon size="250" color="#fff" />
                            </Box>
                        </Heading>
                    </>
                )}
            </Box>
        </Flex>
    );
}
