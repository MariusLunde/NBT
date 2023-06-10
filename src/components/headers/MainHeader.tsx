import React from "react";
import { StyleSheet, Dimensions, Text, TouchableOpacity} from "react-native";
import Animated from 'react-native-reanimated';
import {useNavigation} from "@react-navigation/native";

const posterSize = Dimensions.get('screen').height / 5;

const MainHeader = ({textStyles, headerStyles, navigation, mainText}: any) => {

    const nav = useNavigation();

    return(
        <Animated.View style={[styles.container, headerStyles]}>
            {navigation ? (
                <TouchableOpacity style={styles.backButton} onPress={() => {nav.goBack()}}>
                    <Text style={styles.backButtonText} > {"<"} Back</Text>
                </TouchableOpacity>
            ) :
                (
                    <></>
                )
            }

            <Animated.Text style={[textStyles, { minWidth: 50, position: "absolute", alignSelf: "center"}]}>
                {mainText}
            </Animated.Text>

        </Animated.View>
    )

};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#30515B",
        height: 200
    },
    backButton: {
        marginTop: 25,
        height: 20,
        width: 80,
        left: 20
    },
    backButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "400",
    },
    row: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 20,
        marginBottom: 20
    },
})

export default MainHeader