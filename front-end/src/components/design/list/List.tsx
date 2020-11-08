import { Box, Flex, Text, SimpleGrid, Image, Button, Skeleton, Heading, Icon, useColorMode } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { useCookies } from 'react-cookie';
import { getGenreById } from '../../../utils/utils';
import { MovieGenre } from '../extra/MovieGenre';
import './list.css';

export function List(): ReactElement {
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [data, setData] = React.useState<any>();
    const [showAmount, setShowAmount] = React.useState(5);

    React.useEffect(() => {
        fetch((process.env.REACT_APP_URL || '') + '/user/' + cookies?.auth?.username)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, []);

    const movie_list = React.useMemo(() => {
        if (!data) return <Skeleton width="100%" height="100px" />;
        const movies = [];
        for (let i = 0; i < data?.ratedMovies?.length || 0; i++) {
            if (i >= showAmount) break;
            movies.push(<MovieDetails movie_data={data?.ratedMovies[i]} index={i} />);
        }
        return (
            <SimpleGrid columns={1} spacing={1}>
                {movies}
            </SimpleGrid>
        );
    }, [data, showAmount]);
    return (
        <Box mr="15px" ml="15px">
            {movie_list}
            {showAmount < data?.ratedMovies?.length && (
                <Button borderRadius="0px" width="100%" mt={1} onClick={() => setShowAmount(showAmount + 5)}>
                    Load more
                </Button>
            )}
        </Box>
    );
}
function MovieDetails({ movie_data, index }: any) {
    const [hover, setHover] = React.useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const is_light: boolean = colorMode == 'light';
    const [cookies, setCookie, removeCookie] = useCookies(['reco']);
    const [data, setData] = React.useState<any>();

    React.useEffect(() => {
        fetch((process.env.REACT_APP_URL || '') + '/movie/' + movie_data._id)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);

    if (!data) return <Skeleton width="100%" height="100px" />;
    return (
        <Flex
            bg={is_light ? 'gray.100' : 'gray.700'}
            padding="5px 5px 5px 5px"
            // onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
            onClick={() => setHover(!hover)}
            transition="ease-in-out height 0.5s"
            direction="row"
            justify="space-between"
            height={hover ? '300px' : '80px'}
        >
            <Flex direction="row">
                <Image height="100%" src={data?.poster_path} alt="Dan Abramov" border="1px solid white" />
                <Flex direction="column" justify="flex-start" height="100%" ml="15px">
                    <Heading size="lg" mb="5px">
                        {data.title}
                    </Heading>
                    <Flex direction="row" mb="10px">
                        {data?.genre_ids?.map((genre: string) => (
                            <MovieGenre mr="5px" children={getGenreById(genre)} />
                        ))}
                    </Flex>

                    {hover && (
                        <Flex direction="column" justify="flex-start" className="list-animation">
                            <Text>
                                <b>Release date:</b> {data?.release_date}
                            </Text>
                            <Text>{data?.overview}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Flex direction="column" height="100%" justify="flex-start" mr="15px" mt="20px">
                <Flex direction="row">
                    {new Array(10).fill(0).map((a: any, i: number) => {
                        const color: string =
                            i < movie_data.userRating ? 'yellow.300' : is_light ? 'gray.300' : 'white';
                        return <Icon name="star" color={color} mr="3px" size="30px" />;
                    })}
                </Flex>
            </Flex>
        </Flex>
    );
}
