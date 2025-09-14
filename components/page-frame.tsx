import {ScrollView, View} from "react-native";
import BottomTabBar, { TabId } from "./bottom-tab-bar";
import { ReactNode } from "react";

interface Props {
    active: TabId;
    children: ReactNode;
}

export function PageFrame ({active, children}: Props) {
    return <View style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
    }}>
        <ScrollView style={{width: "100%", flex: 1}}>
            {children}
            <View style={{height: 10}}/>
        </ScrollView>
        <BottomTabBar activeTab={active}/>
    </View>
}