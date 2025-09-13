import {View, StyleSheet, useWindowDimensions, Text} from "react-native";
import { regularFont } from "../lib/fonts";

interface Props {
  data: { timestamp: string, value: number }[];
}

export const BarChart = ({data}: Props) => {
  const {width} = useWindowDimensions();
  const maximum = data.reduce((prev, current) => {
    return Math.max(prev, current.value);
  }, 0) * 1.65;
  const spaceBetween = 3;
  const chartHorizontalMargin = 16;
  const barWidth = (width - chartHorizontalMargin * 2 + spaceBetween) / data.length - spaceBetween;

  return <View style={[styles.container, {paddingHorizontal: chartHorizontalMargin}]}>
    <View style={styles.chart}>
      {data.map((item, index) => <View style={[styles.bar, {
          marginLeft: index === 0 ? 0 : spaceBetween,
          width: barWidth,
          borderRadius: barWidth / 2,
        }]} key={item.timestamp}>
        {maximum > 0 && <View style={[styles.barFill, {
            height: `${item.value / maximum * 100}%`,
            borderRadius: barWidth / 2,
          }]}/>}
      </View>)}
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
    paddingVertical: 100,
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
