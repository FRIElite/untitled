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
    Progress,
    Spinner,
    Stack,
} from '@chakra-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LogoLight } from '../../icons/LogoLight';
import { LogoDark } from '../../icons/LogoDark';
export function Navbar(): ReactElement {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [topgenres, setTopGenres] = useState<any>([]);
    const is_light: boolean = colorMode == 'light';
    const color_mode_icon: any = is_light ? 'sun' : 'moon';
    const color_mode_color: any = is_light ? 'yellow' : 'gray';
    const history = useHistory();

    const randomColor = () => {
        const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'cyan', 'purple'];

        return colors[Math.floor(Math.random() * colors.length)];
    };

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
                    <DrawerHeader borderBottomWidth="1px" mb={1}>
                        <Flex direction="row" justify="flex-start" align="center">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                            <Button variantColor="red" variant="outline" size="sm" ml="15px" onClick={Logout}>
                                Logout
                            </Button>
                        </Flex>
                        <Box mt={2}>Dan Abrahmov</Box>
                    </DrawerHeader>
                    <DrawerBody>
                        <Heading size="md">Top favourite genres</Heading>
                        {topgenres.slice(0, 3).map((e: any) => (
                            <Stack mt={1}>
                                <Flex direction="column">
                                    <Box><strong>{e?.genre}</strong> - {Math.floor(e.p * 10000) / 100}%</Box>
                                    <Progress value={e?.p * 100} color={randomColor()} mb={1}/>
                                </Flex>
                            </Stack>
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
                <Box as={Link} {...{ to: '/' }}>
                    { is_light ? <LogoLight /> : <LogoDark /> }
                </Box>
                { topgenres.length == 0 ? <Spinner size="xl" /> : <Avatar name="Dan Abrahmov" cursor="pointer" src="https://bit.ly/dan-abramov" onClick={onOpen} />}
                
            </Flex>
            <NavbarDrawer />
        </Flex>
    );
}
