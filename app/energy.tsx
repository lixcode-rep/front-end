import {StyleSheet, Text, View} from "react-native";
import { awaited } from "../lib/awaited";
import { useEffect, useState } from "react";
import { Interval, IntervalSwitcher } from "../components/interval-switcher";
import { ActivityIndicator } from "react-native";
import { BarChart } from "../components/bar-chart";
import { HorizontalSelect } from "../components/horizontal-select";
import { boldFont, regularFont } from "../lib/fonts";
import { PageFrame } from "../components/page-frame";

interface Request {
    metterId: string;
    direction: "consumed" | "produced";
    interval: "day" | "month" | "year";
    begin: string;
}
interface Response {
    stats: {value: number; name: string}[];
}

type Record = { name: string; value: number; peak?: boolean };

const dayRecord: Record[] = [
    {name: "00:00", value: 0.1},
    {name: "01:00", value: 0.92},
    {name: "02:00", value: 0.5},
    {name: "03:00", value: 0.3},
    {name: "04:00", value: 0.9},
    {name: "05:00", value: 0.8},
    {name: "06:00", value: 0.0},
    {name: "07:00", value: 0.1},
    {name: "08:00", value: 0.3},
    {name: "09:00", value: 0.5},
    {name: "10:00", value: 0.4},
    {name: "11:00", value: 0.8},
    {name: "12:00", value: 0.2},
    {name: "13:00", value: 0.1},
    {name: "14:00", value: 0.7},
    {name: "15:00", value: 0.8},
    {name: "16:00", value: 0.4},
    {name: "17:00", value: 0.3},
    {name: "18:00", value: 0.2},
    {name: "19:00", value: 0.7},
    {name: "20:00", value: 0.2},
    {name: "21:00", value: 0.8},
    {name: "22:00", value: 0.9},
    {name: "23:00", value: 0.3},
];
const monthRecord: Record[] = [
    {name: "1", value: 12},
    {name: "2", value: 17},
    {name: "3", value: 10},
    {name: "4", value: 12},
    {name: "5", value: 17},
    {name: "6", value: 10},
  {name: "7", value: 11},
  {name: "8", value: 19},
  {name: "9", value: 11},
  {name: "10", value: 8},
  {name: "11", value: 16},
  {name: "12", value: 16},
  {name: "13", value: 1},
  {name: "14", value: 20},
  {name: "15", value: 11},
  {name: "16", value: 14},
  {name: "17", value: 18},
  {name: "18", value: 11},
  {name: "19", value: 13},
  {name: "20", value: 15},
  {name: "21", value: 18},
  {name: "22", value: 11},
  {name: "23", value: 13},
  {name: "24", value: 11},
  {name: "25", value: 16},
  {name: "26", value: 12},
  {name: "27", value: 7},
  {name: "28", value: 5},
  {name: "29", value: 12.92},
  {name: "30", value: 15},
];
const yearRecords : Record[] = [
    {name: "January", value: 123},
  {name: "February", value: 234},
  {name: "March", value: 281.23},
  {name: "April", value: 530},
  {name: "May", value: 102},
  {name: "June", value: 492},
  {name: "July", value: 283},
  {name: "August", value: 203},
  {name: "September", value: 293},
  {name: "October", value: 393},
  {name: "November", value: 429},
  {name: "December", value: 124},
]

export default function () {
    const [result, setResult] = useState<Response|undefined>(undefined);
    const [error, setError] = useState<unknown>(undefined);
    const [loading, setLoading] = useState(true);
    const [sum, setSum] = useState(0);
    const [interval, setInterval] = useState<Interval>("day");

    console.log(result, error, loading);
    
    const update = (date: Date, interval: Interval) => {
        setInterval(interval);
        awaited(async () => {
            // const request = await fetch("/api/raport", {
            //     body: JSON.stringify({
            //         begin: date.toJSON(),
            //         direction: "consumed",
            //         interval: interval,
            //         metterId: "",
            //     } satisfies Request)
            // });
            // return await request.json();
            return Promise.resolve({
                stats: interval === "day" ? dayRecord : interval === "month" ? monthRecord : yearRecords,
            } satisfies Response);
        }, setResult, setError, setLoading);
    };

    useEffect(() => {
        if(result) {
            setSum(result.stats.reduce((sum, item) => {
                return sum + item.value;
            }, 0));
        }
    }, [result]);

    return <PageFrame active="energy">
        <Text style={styles.headerText}>Consumption history</Text>
        <Text>
            <Text style={styles.sumText}>{sum.toFixed(2)}</Text>
            <Text style={styles.kwText}>kW</Text>
        </Text>
        <View style={{height: 32}}/>
        {loading || error ? <View>
            <ActivityIndicator/>
        </View> : <BarChart data={result.stats.map(item => ({
            timestamp: item.name,
            value: item.value
        }))} />}
        <HorizontalSelect current={interval} setValue={value => {
            setInterval(value)
        }} values={[
            {id: "day", name: "Day"},
            {id: "month", name: "Month"},
            {id: "year", name: "Year"},
        ]}/>
        <IntervalSwitcher interval={interval} onUpdate={(date, _, interval) => {
            update(date, interval);
        }} />
    </PageFrame>
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: boldFont,
        fontSize: 20,
        lineHeight: 32,
        color: "#2B2B2B",
        margin: 16,
    },
    sumText: {
        fontFamily: boldFont,
        fontSize: 68,
        color: "#2B2B2B",
        marginLeft: 16,
    },
    kwText: {
        fontFamily: regularFont,
        fontSize: 12,
        color: "#2B2B2B",
    },
})
