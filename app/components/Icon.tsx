import {
    Image,
    ImageStyle,
    StyleProp,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';
import React, { ComponentType } from 'react';
import { colors } from '../theme';
import { ms } from '../utils';

export type IconTypes = keyof typeof iconRegistry;

interface IconProps extends TouchableOpacityProps {
    /**
     * The name of the icon to use from the icon registry.
     */
    icon: IconTypes;
    /**
     * An optional tint color of the icon
     */
    color?: string;
    /**
     * An optional size of the icon
     */
    size?: number;
    /**
     * Style override for the icon image
     */
    style?: StyleProp<ImageStyle>;
    /**
     * Style override for the container
     */
    containerStyle?: StyleProp<ViewStyle>;
    /**
     * An optional function to be called when the icon is pressed
     */
    onPress?: TouchableOpacityProps['onPress'];
}

export const Icon = (props: IconProps) => {
    const {
        icon,
        color = colors.palette.neutral700,
        size = ms(24),
        style: $imageStyleOverride,
        containerStyle: $containerStyleOverride,
        ...WrapperProps
    } = props;

    const isPressable = !!WrapperProps.onPress;
    const Wrapper: ComponentType<ViewProps | TouchableOpacityProps> = isPressable
        ? TouchableOpacity
        : View;
    
    return (
        <Wrapper {...WrapperProps} style={$containerStyleOverride}>
            <Image
                style={[
                    $imageStyle,
                    color ? { tintColor: color } : {},
                    size ? { width: size, height: size } : {},
                    $imageStyleOverride,
                ]}
                source={iconRegistry[icon]}
            />
        </Wrapper>
    );
};

const $imageStyle: ImageStyle = {
    resizeMode: 'contain',
};

export const iconRegistry = {
    home: require('../../assets/icons/home.png'),
    profile: require('../../assets/icons/user.png'),
    cart: require('../../assets/icons/cart.png'),
    next: require('../../assets/icons/next.png'),
    prev: require('../../assets/icons/prev.png'),
    briefcase: require('../../assets/icons/briefcase.png'),
    building: require('../../assets/icons/building.png'),
    cake: require('../../assets/icons/cake.png'),
    degreeCap: require('../../assets/icons/degree-cap.png'),
    female: require('../../assets/icons/female.png'),
    male: require('../../assets/icons/male.png'),
    location: require('../../assets/icons/location.png'),
    phone: require('../../assets/icons/phone.png'),
};
