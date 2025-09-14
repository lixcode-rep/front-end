import {View, StyleSheet, useWindowDimensions, Text} from "react-native";
import { regularFont } from "../lib/fonts";
import {Fragment} from "react";

interface Props {
  data: { timestamp: string, value: number; peak: boolean }[];
}

export const BarChart2 = ({data}: Props) => {
  const {width} = useWindowDimensions();
  const maximum = data.reduce((prev, current) => {
    return Math.max(prev, current.value);
  }, 0) * 1.15;
  const minimum = data.reduce((prev, current) => {
    return Math.min(prev, current.value);
  }, maximum) * 0.75;
  const spaceBetween = 3;
  const chartHorizontalMargin = 16;
  const barWidth = (width - chartHorizontalMargin * 2 + spaceBetween) / data.length - spaceBetween;

  console.log(maximum, minimum);

  return <View style={[styles.container, {paddingHorizontal: chartHorizontalMargin}]}>
    <View style={styles.chart}>
      {data.map((item, index) => <Fragment  key={item.timestamp + index}>
        {<View style={{width: index % 2 !== 0 ? spaceBetween : spaceBetween * 2}} />}
        <View style={[styles.bar, {
          flex: 1,
          borderRadius: 20,
        }]}>
          {maximum > 0 && <View style={[styles.barFill, {
            height: `${(item.value - minimum) / (maximum - minimum) * 100}%`,
            borderRadius: barWidth / 2,
            backgroundColor: index % 2 === 0 ? "#ff0000" : "#0000ff",
          }]}/>}
        </View>
      </Fragment>)}
    </View>
    <View style={styles.legend}>
      <Text style={styles.text}>{data.at(0).timestamp}</Text>
      <View style={styles.flex1}></View>
      <Text style={styles.text}>{data.at(-1).timestamp}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  chart: {
    flexDirection: "row",
  },
  bar: {
    height: 385,
    justifyContent: "flex-end",
    backgroundColor: "#F8F8F8",
  },
  barFill: {
    backgroundColor: "#2B2B2B",
  },
  legend: {
    flexDirection: "row",
    marginTop: 11,
    marginHorizontal: 3,
  },
  flex1: {
    flex: 1,
  },
  text: {
    fontFamily: regularFont,
    fontSize: 12,
    lineHeight: 16,
    color: "#A9A9A9",
  }
})
