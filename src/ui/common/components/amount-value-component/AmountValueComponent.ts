import { createUseStyles } from "react-jss";
import { ThemeInterface } from "../../../../interfaces/theme";
import { Colors } from "../../colors";

export const useStylesFromThemeFunction = createUseStyles((theme: ThemeInterface) => {
    return {
        container: {
            display: 'flex',
        },
        label: {
            fontSize: 13,
            fontWeight: 600,
        },
        value: {
            fontSize: 75,
            fontWeight: 150,
            marginTop: -25,
            color: Colors.purple,
        },
        containerColumn: {
            flexDirection: 'column',
        },
        containerRow: {
            alignItems: 'center',
        },
        labelRow: {
            marginRight: 8,
        },
    };
  });