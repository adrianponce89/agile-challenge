import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;
