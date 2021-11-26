import { Box, NativeBaseProvider } from 'native-base';
import React, { Suspense } from 'react';
import { useColorScheme } from 'react-native';
import { DARK_COLOR, LIGHT_COLOR } from '../../constants/colors';
import { Text } from 'native-base';

const Container: React.FC = ({ children }) => {

    const theme = useColorScheme();
    return (
        <NativeBaseProvider>
            <Box width={'full'} minWidth={"full"} height={"full"} bg={theme == 'dark' ? DARK_COLOR : LIGHT_COLOR}>{children}</Box>
        </NativeBaseProvider>
    );
};

export default Container;
