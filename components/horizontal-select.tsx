import {Pressable, StyleSheet, Text, View} from "react-native";
import { boldFont } from "../lib/fonts";

interface Props<T> {
    current: T;
    values: { id: T, name: string }[];
    setValue(value: T): void;
}

export function HorizontalSelect<T extends string>({current, values, setValue}: Props<T>) {
    return <View style={styles.container}>
        {values.map(item => <Pressable 
            key={item.id} 
            style={[styles.item, item.id === current && styles.activeItem]} 
            disabled={item.id === current}
            onPress={() => {
                setValue(item.id);
            }}>
            <Text style={[styles.itemText, item.id === current && styles.activeItemText]}>{item.name}</Text>
        </Pressable>)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 42,
        backgroundColor: "#F8F8F8",
        margin: 10,
    },
    item: {
        flex: 1,
        height: 34,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
    },
    itemText: {
        fontFamily: boldFont,
        fontSize: 14,
        color: "#A9A9A9",
    },
    activeItem: {
        backgroundColor: "#495DFF",
    },
    activeItemText: {
        color: "#FFFFFF"
    }
})