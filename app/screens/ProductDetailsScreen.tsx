import { View, ViewStyle } from 'react-native';
import React, { useCallback } from 'react';
import Carousel from 'react-native-snap-carousel';
import { AirbnbRating } from 'react-native-ratings';
import Slider from '@react-native-community/slider';
import { useReduxSelector } from '../redux';
import { ms } from '../utils';
import {
  Button,
  ButtonProps,
  Icon,
  NetworkImage,
  Screen,
  Spacer,
  Text,
} from '../components';
import { ImageStyle } from 'react-native-fast-image';
import { colors, spacing } from '../theme';
import { useNavigation } from '@react-navigation/native';

export const ProductDetailsScreen = () => {
  const carouselRef = React.useRef(null);
  const navigation = useNavigation();
  const {
    getProductById: { product },
  } = useReduxSelector(state => state.products);
  const [quantity, setQuantity] = React.useState<number>(1);

  const renderButton = useCallback(() => {
    return (<Button
      tx="productDetailsScreen:addToCart"
      txOptions={{ quantity }}
      style={$addToCart}
      onPress={() => navigation.goBack()}
    />)
  }, [quantity])

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <Screen preset="auto" contentContainerStyle={$root}>
      <Spacer mainAxisSize={spacing.xl} />
      <View style={$carouselConatiner}>
        <Icon
          icon="prev"
          size={ms(40)}
          onPress={() => {
            carouselRef.current.snapToPrev();
          }}
        />

        <Carousel
          ref={carouselRef}
          data={product?.images}
          renderItem={({ item }) => (
            <NetworkImage source={item} style={$sliderItem} />
          )}
          sliderWidth={ms(375 - 80)}
          itemWidth={ms(375 - 80)}
          layout={'default'}
          loop={true}
        />

        <Icon
          icon="next"
          size={ms(40)}
          onPress={() => {
            carouselRef.current.snapToNext();
          }}
        />
      </View>
      <View style={$bottomContainer}>
        <Spacer mainAxisSize={spacing.md} />
        <Text tx={product?.title} preset="h5" />
        <Spacer mainAxisSize={spacing.xxs} />
        <Text tx={product?.description} />
        <Spacer mainAxisSize={spacing.xxl} />
        <View style={$rowContainer}>
          <Text tx="productDetailsScreen:price" />
          <Text text={`${product?.price.toString()}$`} />
        </View>
        <Spacer mainAxisSize={spacing.md} />
        <View style={$rowContainer}>
          <Text tx="productDetailsScreen:feedback" />
          <AirbnbRating
            size={ms(12)}
            count={5}
            defaultRating={product?.rating}
            showRating={false}
            selectedColor={colors.palette.primary900}
            isDisabled={true}
          />
        </View>
        <Spacer mainAxisSize={spacing.xxl} />
        <View style={$quantityContainer}>
          <Text tx="productDetailsScreen:quantity" />
          <Spacer mainAxisSize={spacing.lg} />
          <View style={$sliderContainer}>
            <Text text="1" preset="h5" />
            <Slider
              style={{ width: ms(250), height: 40 }}
              minimumValue={1}
              maximumValue={10}
              step={1}
              minimumTrackTintColor={colors.palette.primary900}
              maximumTrackTintColor={colors.palette.neutral300}
              thumbTintColor={colors.palette.primary900}
              onValueChange={value => setQuantity(value)}
              value={quantity}
            />
            <Text text="10" preset="h5" />
          </View>
        </View>
      </View>
      {renderButton()}
      <Spacer mainAxisSize={spacing.md} />
    </Screen>
  );
};

const $root: ViewStyle = {
  flex: 1
}

const $carouselConatiner: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
};

const $carousel: ViewStyle = {
  width: '80%',
};

const $sliderItem: ImageStyle = {
  width: '100%',
  height: ms(160),
};

const $bottomContainer: ViewStyle = {
  width: '100%',
  paddingHorizontal: spacing.xxl,
  flex: 1,
  flexGrow: 1,
};

const $rowContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const $quantityContainer: ViewStyle = {
  alignItems: 'center',
};

const $sliderContainer: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const $addToCart: ViewStyle = {
  marginHorizontal: spacing.xl,
};
