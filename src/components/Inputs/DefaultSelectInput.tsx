import React from 'react';
import {
    Select,
    VStack,
    CheckIcon,
} from "native-base"
import { LIGHT_COLOR, PRIMARY_COLOR } from '../../constants/colors';
import { useColorScheme } from 'react-native';

const DefaultSelectInput = (props: any) => {
    const theme = useColorScheme();

    return (
        <VStack alignItems="center" space={4}>
            <Select
                selectedValue={props.selectedOption}
                minWidth="95%"
                _selectedItem={{
                    bg: PRIMARY_COLOR,
                    _text: {
                        color: LIGHT_COLOR,
                    },
                    endIcon: <CheckIcon size="5" />,
                }}
                mt={4}
                onValueChange={(itemValue) => { props.setSelectedOption(itemValue) }}
            >
                {props.options.map((item: any) => {
                    return (
                        <Select.Item label={item.label} value={item.value} />
                    )
                })}
            </Select>
        </VStack>
    );
};

export default DefaultSelectInput;