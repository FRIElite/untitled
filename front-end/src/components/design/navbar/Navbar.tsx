import React, { ReactElement } from 'react';
import {
    Flex,
    Box,
    Drawer,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    IconButton,
    useColorMode,
    Divider,
    Heading,
    DrawerCloseButton,
    List,
    ListItem,
    Avatar,
    Button,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
export function Navbar(): ReactElement {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const is_light: boolean = colorMode == 'light';
    const color_mode_icon: any = is_light ? 'sun' : 'moon';
    const color_mode_color: any = is_light ? 'yellow' : 'gray';

    const Logout = () => {
        removeCookie('auth');
        return window.location.reload(false);
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
                    </DrawerHeader>
                    <DrawerBody>
                        <List styleType="disc">
                            <ListItem>
                                <Link to="/" color="cyan.500">
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/list" color="cyan.500">
                                    List
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to="/swipe" color="cyan.500">
                                    Swipe
                                </Link>
                            </ListItem>
                        </List>
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
                {/* <IconButton
                    variant="ghost"
                    variantColor="teal"
                    aria-label="Call Sage"
                    icon="drag-handle"
                    size="lg"
                    onClick={onOpen}
                /> */}

                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" onClick={onOpen} />
            </Flex>
            <NavbarDrawer />
        </Flex>
    );
}
