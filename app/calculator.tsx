import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {boldFont, regularFont} from "../lib/fonts";
import {useState} from "react";
import {PageFrame} from "../components/page-frame";
import {HorizontalSelect} from "../components/horizontal-select";

type Classes = "G" | "F" | "E" | "D" | "C" | "B" | "A";
type ClassesPlus = Classes | "A+" | "A++" | "A+++";

const fridgeCostMap: Record<ClassesPlus, number> = {
  "A+++": 14,
  "A++": 16,
  "A+": 17,
  A: 19,
  B: 21,
  C: 23,
  D: 25,
  E: 28,
  F: 30,
  G: 33,
};

const washCostMap: Record<Classes, number> = {
  A: 0.8,
  B: 0.93,
  C: 1.11,
  D: 1.29,
  E: 1.46,
  F: 1.65,
  G: 1.82,
}

interface RefrigeratorData {
  enabled: boolean;
  quantity: number;
  class: ClassesPlus;
}

interface WashingMachineData {
  enabled: boolean;
  quantity: number;
  class: Classes;
}

interface AirConditioningData {
  enabled: boolean;
  minPerDay: number;
}

function QuantitySelector ({setQuantity, quantity}: {quantity: number; setQuantity: (quantity: number) => void}) {
  return <View style={styles.quantitySelector}>
    <Pressable onPress={() => setQuantity(quantity-1)} disabled={quantity <= 1}>
      <Image source={require("../assets/minus-btn.png")}/>
    </Pressable>
    <Text style={styles.quantityText}>{quantity}</Text>
    <Pressable onPress={() => setQuantity(quantity+1)}>
      <Image source={require("../assets/plus-sign.png")}/>
    </Pressable>
  </View>
}

function ComboBoxSelect<T> ({current, list}: {
  current: T;
  list: {name: string; value: T}[];
}) {
  const [show, setShow] = useState(false);

  return <View style={styles.combobox}>
    <Text style={styles.comboboxText}>{list.find(it => it.value === current).name}</Text>
    <Image source={require("../assets/combo-extend.png")} />
  </View>
}

export default function () {
  const [fridge, setFridge] = useState<RefrigeratorData>({
    enabled: false,
    class: "A++",
    quantity: 1,
  });
  const [washing, setWashing] = useState<WashingMachineData>({
    enabled: false,
    class: "B",
    quantity: 1,
  });
  const [air, setAir] = useState<AirConditioningData>({
    enabled: false,
    minPerDay: 1,
  });
  const checkedImage = require("../assets/checked.png");
  const uncheckedImage = require("../assets/unchecked.png");
  const [kW, setKw] = useState<number>(0);
  const [tariff, setTariff] = useState<string>("off");

  return <PageFrame active="calculator">
    <Text style={styles.header}>Calculator</Text>
    <Pressable style={styles.item} onPress={() => {
      setFridge({...fridge, enabled: !fridge.enabled});
    }}>
      <Image source={require("../assets/refrigerator.png")} />
      <Text style={styles.itemText}>Refrigerator</Text>
      <Image source={fridge.enabled ? checkedImage : uncheckedImage}/>
    </Pressable>
    {fridge.enabled && <View style={styles.row}>
        <View style={styles.flex1}>
            <Text style={styles.miniheader}>Devices quantity</Text>
            <QuantitySelector quantity={fridge.quantity} setQuantity={n => {
              setFridge({...fridge, quantity: n})
            }}/>
        </View>
        <View style={styles.flex1}>
            <Text style={styles.miniheader}>Class</Text>
            <ComboBoxSelect current={fridge.class} list={Object.keys(fridgeCostMap).map(c => {
              return {name: c, value: c};
            })} />
        </View>
    </View> }
    <Pressable style={styles.item} onPress={() => {
      setWashing({...washing, enabled: !washing.enabled});
    }}>
      <Image source={require("../assets/washing-machine.png")} />
      <Text style={styles.itemText}>Washing machine</Text>
      <Image source={washing.enabled ? checkedImage : uncheckedImage}/>
    </Pressable>
    {washing.enabled && <View style={styles.row}>
        <View style={styles.flex1}>
            <Text style={styles.miniheader}>Quantity of washes</Text>
            <QuantitySelector quantity={washing.quantity} setQuantity={n => {
              setWashing({...washing, quantity: n})
            }}/>
        </View>
        <View style={styles.flex1}>
            <Text style={styles.miniheader}>Class</Text>
            <ComboBoxSelect current={washing.class} list={Object.keys(washCostMap).map(c => {
              return {name: c, value: c};
            })} />
        </View>
    </View> }
    <Pressable style={styles.item} onPress={() => {
      setAir({...air, enabled: !air.enabled});
    }}>
      <Image source={require("../assets/air-conditioning.png")} />
      <Text style={styles.itemText}>Air conditioning</Text>
      <Image source={air.enabled ? checkedImage : uncheckedImage}/>
    </Pressable>
    {air.enabled && <View style={styles.row}>
      <View style={styles.flex1}>
          <Text style={styles.miniheader}>Hours used per day</Text>
          <QuantitySelector quantity={air.minPerDay} setQuantity={n => {
            setAir({...air, minPerDay: n})
          }}/>
      </View>
  </View> }
    <Text style={styles.miniheader}>Tariff</Text>
    <HorizontalSelect current={tariff} values={[
      {id: "off", name: "Off-peak"},
      {id: "mid", name: "Mid-peak"},
      {id: "on", name: "On-peak"},
    ]} setValue={setTariff}/>
    <Pressable style={styles.btn} onPress={() => {
      let kW = 0;

      if (fridge.enabled) {
        kW += fridge.quantity * fridgeCostMap[fridge.class];
      }
      if (washing.enabled) {
        kW += washing.quantity * washCostMap[washing.class];
      }
      if (air.enabled) {
        kW += air.minPerDay * 33;
      }

      setKw(kW);
    }}>
      <Text style={styles.btnText}>Estimate bill</Text>
    </Pressable>
    <View style={styles.row}>
      <Text style={styles.label}>Consumation</Text>
      <Text style={styles.computed}>{kW} kWh / month</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Bill</Text>
      <Text style={styles.computed}>{kW * 4} lei MD</Text>
    </View>
  </PageFrame>
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  btn: {
    height: 58,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2B2B2B",
    borderRadius: 50,
    margin: 10,
  },
  btnText: {
    fontFamily: boldFont,
    fontSize: 18,
    color: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    alignContent: "space-between",
    padding: 4,
    alignSelf: "stretch",
    marginHorizontal: 10,
  },
  label: {
    fontFamily: regularFont,
    fontSize: 14,
    lineHeight: 16,
    color: "#979797",
    flex: 1,
  },
  computed: {
    fontFamily: boldFont,
    fontSize: 14,
    lineHeight: 16,
  },
  quantitySelector: {
    flexDirection: "row",
    padding: 10,
  },
  quantityText: {
    fontFamily: regularFont,
    fontSize: 15,
    color: "#000000",
    alignSelf: "center",
    margin: 4,
  },
  combobox: {
    height: 28,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#495DFF",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  comboboxText: {
    fontFamily: regularFont,
    fontSize: 15,
    color: "#000000",
    alignSelf: "center",
    margin: 4,
  },
  header: {
    fontFamily: boldFont,
    fontSize: 20,
    lineHeight: 24,
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#F8F8F8",
    margin: 4,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  miniheader: {
    fontFamily: regularFont,
    fontSize: 12,
    lineHeight: 16,
    marginHorizontal: 10,
    color: "#979797",
    marginTop: 10,
  },
  itemText: {
    fontFamily: boldFont,
    fontSize: 16,
    flex: 1,
    padding: 10,
  }
})
