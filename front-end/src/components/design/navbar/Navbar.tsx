import React, { ReactElement, useState } from 'react';
import {
    Flex,
    Drawer,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    IconButton,
    useColorMode,
    Heading,
    DrawerCloseButton,
    List,
    ListItem,
    Avatar,
    Button,
    Box,
} from '@chakra-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export function Navbar(): ReactElement {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [topgenres, setTopGenres] = useState([{ genre: '', p: 0 }]);
    const is_light: boolean = colorMode == 'light';
    const color_mode_icon: any = is_light ? 'sun' : 'moon';
    const color_mode_color: any = is_light ? 'yellow' : 'gray';
    const history = useHistory();

    React.useEffect(() => {
        fetch((process.env.REACT_APP_URL || '') + '/topgenres/' + cookies?.auth?.username)
            .then((res) => res.json())
            .then((res) => {
                setTopGenres(res);
            });
    }, []);

    const Logout = () => {
        removeCookie('auth');
        history.push('/');
        window.location.reload();
    };

    const NavbarDrawer = (): ReactElement => {
        return (
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        <Flex direction="row" justify="flex-start" align="center">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                            <Button variantColor="red" variant="outline" size="sm" ml="15px" onClick={Logout}>
                                Logout
                            </Button>
                        </Flex>
                        <Box>Dan Abrahmov</Box>
                    </DrawerHeader>
                    <DrawerBody>
                        <strong>Top favourite genres</strong>
                        {topgenres.slice(0, 3).map((e) => (
                            <Box>
                                <strong>{e.genre}</strong> - {Math.floor(e.p * 10000) / 100}%
                            </Box>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        );
    };

    return (
        <Flex width="100%" direction="column" justify="flex-start" align="center" padding="15px 15px 30px 15px">
            <Flex width="100%" direction="row" justify="space-between" align="center">
                <IconButton
                    variant="ghost"
                    variantColor={color_mode_color}
                    aria-label="Call Sage"
                    icon={color_mode_icon}
                    size="lg"
                    onClick={() => toggleColorMode()}
                />
                <Heading as={Link} {...{ to: '/' }} size="2xl">
                    Reco
                </Heading>
                <Avatar name="Dan Abrahmov" cursor="pointer" src="https://bit.ly/dan-abramov" onClick={onOpen} />
            </Flex>
            <NavbarDrawer />
        </Flex>
    );
}
