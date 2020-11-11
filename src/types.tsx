import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: { pictureDetails: PictureProps | undefined };
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;

export type PictureProps = {
  author?: string;
  camera?: string;
  cropped_picture: string;
  full_picture?: string;
  id: number;
};
