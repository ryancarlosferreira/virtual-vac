type InputProps = React.ComponentProps<"input"> & {
  children?: React.ReactNode;
};

export function Input({ children, ...props }: InputProps) {
  return (
    <div className="inline-flex items-center w-100 h-12 gap-2 bg-amber-50 text-black rounded-lg shadow-lg">
      {children}
      <input className="outline-none" {...props} />
    </div>
  );
}

/*
import { TouchableOpacity, TouchableOpacityProps, Text} from "react-native";


import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "../StatusIcon";

type Props = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
}

export function Filter({ status, isActive, ...rest}: Props){
    return (
        <TouchableOpacity
            style={[styles.container, { opacity: isActive ? 1 : 0.5}]}
            activeOpacity={0.8}
            {...rest}
        >
            <StatusIcon status={status} />

            <Text style={styles.title}>
                { status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}
*/

/*
import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput 
        style={styles.container} 
        placeholderTextColor="#74798B"
        {...rest} />
    )
}
*/
