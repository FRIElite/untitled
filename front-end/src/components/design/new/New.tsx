import {
    Button,
    Flex,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorMode,
    useToast,
} from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useCookies } from 'react-cookie';
import { getGenreById } from '../../../utils/utils';
import { MovieGenre } from '../extra/MovieGenre';

export function New(): ReactElement {
    return (
        <Flex direction="row" justify="center" width="100%">
            <PopoverForm />
        </Flex>
    );
}
const PopoverForm = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const { colorMode, toggleColorMode } = useColorMode();
    const is_light: boolean = colorMode == 'light';
    const [values, setValues] = React.useState([]);
    const [value, setValue] = React.useState('');
    const [selected, setSelected] = React.useState<any>();
    const [add, setAdd] = React.useState(false);
    const toast = useToast();
    const ref: any = React.useRef();

    const updateValues = (q: any) => {
        if (selected?.title) setSelected({});
        setValue(q);
        if (q == '') return setValues([]);
        return fetch((process.env.REACT_APP_URL || 'localhost') + `/movie?q=${q}`)
            .then((res) => res.json())
            .then((res) => setValues(res));
    };

    const MovieOption = ({ movie }: any) => {
        const [highlighted, setHighlited] = React.useState(false);
        return (
            <Flex
                direction="row"
                justify="flex-start"
                onClick={() => {
                    setValue(movie.title);
                    setSelected(movie);
                    ref.current.focus();
                }}
                cursor="pointer"
                bg={highlighted ? is_light ? 'gray.100' : 'gray.600' : ''}
                onMouseEnter={() => setHighlited(true)}
                onMouseLeave={() => setHighlited(false)}
                pl={1}
            >
                <div dangerouslySetInnerHTML={{ __html: movie.title.replaceAll(value, `<b>${value}</b>`) }} />
            </Flex>
        );
    };

    const addMovie = (data: any) => {
        if (!data) return;

        fetch((process.env.REACT_APP_URL || '') + '/addunrated/' + cookies?.auth?.username, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                _id: data._id,
                userRating: 0,
            }),
        })
            .then(() =>
                toast({
                    title: data.title,
                    description: 'was added.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: "bottom-right",
                })
            )
            .catch(() =>
                toast({
                    title: data.title,
                    description: 'failed to add.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: "bottom-right",
                })
            );
    };

    return (
        <Flex direction="column" width="100%" pl={10} pr={10}>
            <Flex></Flex>
            <InputGroup size="lg">
                <Input
                    ref={ref}
                    variant="flushed"
                    placeholder="Enter name"
                    onChange={(e: any) => updateValues(e.target.value)}
                    width="100%"
                    focusBorderColor={values?.length > 0 || value == '' ? 'teal.400' : 'red.400'}
                    mb={1}
                    pl={1}
                    value={value}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="md" variant="outline" variantColor="teal" isDisabled={!selected?.title} onClick={() => addMovie(selected)}>
                        Add
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Flex direction="column">
                {values.map((value: any) => (
                    <MovieOption movie={value} />
                ))}
            </Flex>

            {selected?.title && (
                <Flex
                    bg={is_light ? 'gray.100' : 'gray.700'}
                    padding="5px 5px 5px 5px"
                    transition="ease-in-out height 0.5s"
                    direction="row"
                    justify="space-between"
                    mt="15px"
                    p={3}
                >
                    <Image height="200px" src={selected?.poster_path} alt="Dan Abramov" border="1px solid white" />
                    <Flex direction="column" justify="flex-start" height="100%" ml="30px">
                        <Heading size="lg" mb="5px">
                            {selected?.title}
                        </Heading>
                        <Flex direction="row" mb="10px">
                            {selected?.genre_ids?.map((genre: string) => (
                                <MovieGenre mr="5px" children={getGenreById(genre)} />
                            ))}
                        </Flex>
                        <Flex direction="column" justify="flex-start">
                            <Text>
                                <b>Release date:</b> {selected?.release_date}
                            </Text>
                            <Text>{selected?.overview}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};
