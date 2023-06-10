import React from "react";
import { StyleSheet, SafeAreaView} from "react-native";
import Animated from 'react-native-reanimated';
import LinkItem from "../components/items/LinkItem";
import Detail from "./Detail";

const Home = ({}: any) => {


    return(
        <SafeAreaView style={[styles.background]} >
            <Animated.ScrollView scrollEventThrottle={1} contentContainerStyle={styles.background}>
                <LinkItem text={'Navigate to scrollview'} navigate={Detail as never} />
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

export default Home