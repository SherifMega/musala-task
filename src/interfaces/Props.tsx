import {NavigationAction} from '@react-navigation/routers';
import {StackScreenProps} from '@react-navigation/stack';
import {IArticle} from './News';

export interface IHomeProps {
  navigation: NavigationAction;
}

export interface ISettingsProps {
  componentId: string;
}

export type RootStackParamList = {
  News: {searchText?: string};
  NewsDetails: {item: IArticle};
  BottomTabs: undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, 'News'>;