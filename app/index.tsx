import { Text } from "react-native";
import { BarChart } from "../components/bar-chart";

export default function Page () {
    return <BarChart data={[
        {timestamp: "00:00", value: 1},
        {timestamp: "01:00", value: 9},
        {timestamp: "02:00", value: 5},
        {timestamp: "03:00", value: 3},
        {timestamp: "04:00", value: 9},
        {timestamp: "05:00", value: 8},
        {timestamp: "06:00", value: 0},
        {timestamp: "07:00", value: 1},
        {timestamp: "08:00", value: 3},
        {timestamp: "09:00", value: 5},
        {timestamp: "10:00", value: 4},
        {timestamp: "11:00", value: 8},
        {timestamp: "12:00", value: 2},
        {timestamp: "13:00", value: 1},
        {timestamp: "14:00", value: 7},
        {timestamp: "15:00", value: 8},
        {timestamp: "16:00", value: 4},
        {timestamp: "17:00", value: 3},
        {timestamp: "18:00", value: 2},
        {timestamp: "19:00", value: 7},
        {timestamp: "20:00", value: 2},
        {timestamp: "21:00", value: 8},
        {timestamp: "22:00", value: 9},
        {timestamp: "23:00", value: 3},
    ]} />;
}
