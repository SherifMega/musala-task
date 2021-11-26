import React from 'react';
import Container from '../../components/Container/Container';
import { useColorScheme } from 'react-native';
import CardWithImage from '../../components/Cards/CardWithImage';

const NewsDetails = ({ route }: any) => {
    const theme = useColorScheme();

    return (
        <Container>
            <CardWithImage item={route.params.item} />
        </Container>
    );
};

export default NewsDetails;