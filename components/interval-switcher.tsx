import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { boldFont } from "../lib/fonts";

export type Interval = "day" | "month" | "year";
const msInDay = 1000 * 60 * 60 * 24;

interface Props {
    interval: Interval;
    onUpdate(date: Date, interval: number, intervalType: Interval): void;
}

export const IntervalSwitcher = ({onUpdate, interval}: Props) => {
    const [dateAndInterval, setDateAndInterval] = useState<[Date, number]>([new Date, 0]);
    const [date, numericInterval] = dateAndInterval;
    const canGoNext = date.getTime() + numericInterval <= Date.now();
    const intervalType = interval;

    useEffect(() => {
        update(fixDateByInterval(date));
    }, [interval]);

    function calculateNumericInterva(date: Date) {
        if (interval === "day") {
            return msInDay;
        }
        if (interval === "month") {
            return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() * msInDay;
        }
        const nextYear = new Date(date.getFullYear() + 1, 0, 1);
        const thisYear = new Date(date.getFullYear(), 0, 1);
        
        return nextYear.getTime() - thisYear.getTime();
    }

    function update(date: Date) {
        const interval = calculateNumericInterva(date);

        onUpdate?.(date, interval, intervalType);
        setDateAndInterval([date, interval]);
    }

    function stepInterval(direction: number) {
        update(fixDateByInterval(new Date(date.getTime() + (direction > 0 ? numericInterval + 1 : -1))))
    }

    function fixDateByInterval (date: Date) {
        return new Date(
            date.getFullYear(),
            interval === "year" ? 0 : date.getMonth(),
            interval === "day" ? date.getDate() : 1,
        );
    }

    return <View style={styles.container}>
        <Pressable style={styles.btn} onPress={() => stepInterval(-1)}>
            <Image source={require("../assets/Icons_Back.png")} />
        </Pressable>
        <View style={styles.center}>
            <Text style={styles.centerText}>{interval === "day" 
                ? dateToDayString(date) 
                : interval === "month" ? dateToMonthString(date) : dateToYearString(date)}</Text>
        </View>
        <Pressable style={styles.btn} onPress={() => stepInterval(1)} disabled={!canGoNext}>
            <Image source={canGoNext 
                ? require("../assets/Icons_Forward.png") 
                : require("../assets/Icons_Forward_Disable.png")}/>
        </Pressable>
    </View>;
}

function dateToDayString(date: Date) {
    return date.toLocaleDateString(undefined, {
        day: "numeric",
        weekday: "short",
    });
}

function dateToMonthString(date: Date) {
    return date.toLocaleDateString(undefined, { month: "long" });
}

function dateToYearString(date: Date) {
    return date.toLocaleDateString(undefined, { year: "numeric" });
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    center: {
        flex: 1,
        alignItems: "center",
    },
    centerText: {
        fontFamily: boldFont,
        fontSize: 20,
        color: "#2B2B2B"
    },
    btn: {
        width: 40,
        height: 40,
    }
})
