import React from "react";
import {StyleSheet, SafeAreaView, Dimensions} from "react-native";
import MainHeader from "../components/headers/MainHeader";
import LinkItem from "../components/items/LinkItem";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from "react-native-reanimated";

const width = Dimensions.get("screen").width


const Detail = ({}: any) => {

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    const headerStyles = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, [0, 200], [120, 60], Extrapolation.CLAMP),
            marginBottom: interpolate(scrollY.value, [0, 200], [40, 10], Extrapolation.CLAMP),
        };
    });

    const textStyles = useAnimatedStyle(() => {
        return {
            fontSize: interpolate(scrollY.value, [0, 200], [40, 20], Extrapolation.CLAMP),
            color: "#c2c2c2",
            fontWeight: "600",
            marginTop: interpolate(scrollY.value, [0, 100, 200], [30, 25, 20], Extrapolation.CLAMP),
            left: interpolate(scrollY.value, [0, 200], [(width / 2) - 50, width / 4], Extrapolation.CLAMP),
        };
    });
    return(
        <SafeAreaView style={styles.background}>
            <MainHeader navigation={true} headerStyles={headerStyles} textStyles={textStyles} mainText={"Detail"}  />
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                scrollEventThrottle={1}
                onScroll={scrollHandler}
            >
                <LinkItem text={'foo'} />
                <LinkItem text={'bar'} />
                <LinkItem text={'baz'} />
                <LinkItem text={'Hello World!'} />
                <LinkItem text={'Hello World!'} />
                <LinkItem text={'Hello World!'} />
                <LinkItem text={'Hello World!'} />
                <LinkItem text={'Hello World!'} />
                <LinkItem text={'Hello World!'} />
                <LinkItem text={'Hello World!'} />
            </Animated.ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#30515B"
    },
    scrollView: {
        backgroundColor: "#ffffff"
    }
})

export default Detail