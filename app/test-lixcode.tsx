import { HorizontalSelect } from "../components/horizontal-select";

export default function () {
    return <HorizontalSelect
    current="x"
    setValue={() => void 0}
    values={[
        {id: "x", name: "Day"},
        {id: "y", name: "Week"},
        {id: "z", name: "Month"},
    ]}
    />
}