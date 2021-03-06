import React, { useState, useEffect } from 'react';
import Container from '../../components/Container/Container';
import DefaultSelectInput from '../../components/Inputs/DefaultSelectInput';
import { getAppLanguages } from '../../lang/langOptions';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
    const { t, i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(i18n.language);

    const onSelectLang = async (langValue: string) => {
        i18n.changeLanguage(langValue);
        setSelectedLang(langValue);
        try {
            await AsyncStorage.setItem('selectedAppLang', langValue)
        } catch (e) {
            // saving error
        }
    };

    return (
        <Container>
            <DefaultSelectInput options={getAppLanguages()} selectedOption={selectedLang} setSelectedOption={onSelectLang} />
        </Container>
    );
};

export default Settings;