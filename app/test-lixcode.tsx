import { HorizontalSelect } from "../components/horizontal-select";
import { IntervalSwitcher } from "../components/interval-switcher";

export default function () {
    return <>
    <IntervalSwitcher
        interval="day"
        onUpdate={(date, interval) => {
            console.log(date, interval);
        }}
    />
    <IntervalSwitcher
        interval="month"
        onUpdate={(date, interval) => {
            console.log(date, interval);
        }}
    />
    <IntervalSwitcher
        interval="year"
        onUpdate={(date, interval) => {
            console.log(date, interval);
        }}
    />
    </>
}