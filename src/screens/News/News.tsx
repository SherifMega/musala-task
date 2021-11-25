import React, { useState, useEffect } from 'react';
import { FlatList, Heading, Center } from 'native-base';
import Container from '../../components/Container/Container';
import CardWithImage from '../../components/Cards/CardWithImage';
import { IArticle, IArticlesProps } from '../../interfaces/News';
import { HomeProps } from '../../interfaces/Props';
import { APIResponse } from "../../interfaces/APIS";
import { TouchableOpacity, View } from 'react-native';
import callAPI from '../../helpers/callApi';
import { API_URL } from '@env';
import { NativeModules, useColorScheme } from 'react-native';
import SearchInput from '../../components/Inputs/SearchInput';
import { useTranslation } from 'react-i18next';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants/colors';

const News = ({ navigation, route }: HomeProps) => {
    const { t } = useTranslation();
    const theme = useColorScheme();
    const [newsData, setNewsData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [totalResults, setTotalResults] = useState(0);

    const renderNewsItem = ({ item }: IArticlesProps) => (
        <TouchableOpacity onPress={() =>
            navigation.navigate('NewsDetails', { item })}>
            <CardWithImage item={item} />
        </TouchableOpacity>
    );

    useEffect(() => {
        fetchNews();
    }, [])

    const fetchNews = async () => {
        try {
            setLoading(true);
            const response: APIResponse = await callAPI(
                API_URL + "&domains=techcrunch.com&pageSize=10&language=" + NativeModules.I18nManager.localeIdentifier.substring(0, 2) + "&page=" + pageNumber + "&q=" + searchText
                , "GET");
            setTotalResults(response.totalResults);
            setNewsData((prevState: any) =>
                [...prevState, ...response.articles]
            );
            setLoading(false);
        } catch (e: any) {
            setLoading(false);
        }
    };

    const onSearch = () => {
        resetData();
        fetchNews();
    };

    const resetData = () => {
        setPageNumber(1);
        setNewsData([]);
        setTotalResults(0);
    };

    const handleLoadMoreNews = () => {
        if (pageNumber * 10 < totalResults) {
            const newPage = pageNumber + 1;
            setPageNumber(newPage);
            fetchNews();
        }
    };

    const renderNoResult = () => {
        if (!loading) {
            return (
                <Center>
                    <Heading
                        size="md"
                        mt="4"
                        color={theme == 'dark' ? LIGHT_COLOR : DARK_COLOR}>
                        {t('no_data')}
                    </Heading>
                </Center>
            )
        }
        return null
    };

    return (
        <Container>
            <View style={{ padding: 5 }}>
                <SearchInput searchText={searchText} setSearchText={setSearchText} onSearch={onSearch} />
            </View>
            <FlatList
                padding={'2'}
                data={newsData}
                renderItem={renderNewsItem}
                keyExtractor={(item, index) => index.toString()}
                refreshing={loading}
                onRefresh={() => fetchNews()}
                onEndReached={handleLoadMoreNews}
                onEndReachedThreshold={10}
                ListEmptyComponent={renderNoResult}
            />
        </Container>
    );
};

export default News;