import {StyleSheet, Text} from "react-native";
import {BarChart2} from "../components/bar-chart-2";
import {PageFrame} from "../components/page-frame";
import {boldFont} from "../lib/fonts";

const fakeData = {
  "quantile": 0.98,
  "peak_threshold": 73.94,
  "timestamps": [
    "2025-06-08T16:00:00+03:00",
    "2025-06-08T17:00:00+03:00",
    "2025-06-08T18:00:00+03:00",
    "2025-06-08T19:00:00+03:00",
    "2025-06-08T20:00:00+03:00",
    "2025-06-08T21:00:00+03:00",
    "2025-06-08T22:00:00+03:00",
    "2025-06-08T23:00:00+03:00",
    "2025-06-09T00:00:00+03:00",
    "2025-06-09T01:00:00+03:00",
    "2025-06-09T02:00:00+03:00",
    // "2025-06-09T03:00:00+03:00",
    // "2025-06-09T04:00:00+03:00",
    // "2025-06-09T05:00:00+03:00",
    // "2025-06-09T06:00:00+03:00",
    // "2025-06-09T07:00:00+03:00",
    // "2025-06-09T08:00:00+03:00",
    // "2025-06-09T09:00:00+03:00",
    // "2025-06-09T10:00:00+03:00",
    // "2025-06-09T11:00:00+03:00",
    // "2025-06-09T12:00:00+03:00",
    // "2025-06-09T13:00:00+03:00",
    // "2025-06-09T14:00:00+03:00",
    // "2025-06-09T15:00:00+03:00"
  ],
  "prediction": [
    70.686,
    71.004,
    70.55,
    70.893,
    72.454,
    73.259,
    74.104,
    73.748,
    71.729,
    69.177,
    68.489,
    69.27,
    68.446,
    69.344,
    68.628,
    68.676,
    68.976,
    68.67,
    68.875,
    69.015,
    66.954,
    68.168,
    68.034,
    68.571
  ],
  "is_peak": [
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
}

function calc(x) {
//   cubic-bezier(.01,.69,.99,.44)
}

export default function () {
  return <PageFrame active={"prediction"}>
    <Text style={styles.title}>Prediction</Text>
    <BarChart2 data={fakeData.timestamps.map((time, index) => {
      return {
        timestamp: new Date(time).getHours().toString(),
        value: fakeData.prediction[index],
        peak: fakeData.is_peak[index] !== 0,
      }
    }).map(it => {
      return [it, {...it, value: it.value * (Math.random() / 10 + 0.95)}]
    }).flat(1)}/>
  </PageFrame>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: boldFont,
    fontSize: 24,
    color: "#232332",
    margin: 10,
    marginTop: 20,
  }
})
