import React from 'react';
import { useTranslation } from 'react-i18next';
import {Input, Icon, Text} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { PRIMARY_COLOR } from '../../constants/colors';

const SearchInput = (props:any) => {
    const { t } = useTranslation();

    return (
        <Input
            value={props.searchText}
            onChangeText={(text: string) => props.setSearchText(text)}
            placeholder={t('search')}
            variant="filled"
            width="100%"
            bg="gray.200"
            borderRadius="10"
            placeholderTextColor="gray.500"
            _hover={{ bg: 'gray.300', borderWidth: 0 }}
            borderWidth="0"
            marginBottom={'1'}
            InputLeftElement={
                <Icon
                    ml="2"
                    size="6"
                    color="gray.500"
                    onPress={() => props.onSearch()}
                    as={<Ionicons name="search" />}
                />
            }
            InputRightElement={
                <TouchableOpacity onPress={props.onSearch}>
                    <Text color={PRIMARY_COLOR} marginRight="2">
                        {t('search')}
                    </Text>
                </TouchableOpacity>
            }
        />
    );
};

export default SearchInput;