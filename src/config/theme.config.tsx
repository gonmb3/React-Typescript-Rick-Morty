import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

type ThemeProp = {
  children: JSX.Element;
};
enum themePalette {
    BG = "#12181b",
    LIME = "#00c4ff",
    //alert styles
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN= "rgba(244,67,54,0.1)",
    SUCCESS_MAIN= "#66bb6a",
    BG_SUCCES_MAIN= "rgba(102,187,106,0.1)"

}

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const theme = createTheme({
    palette:{
        mode: "dark",
        background:{
            default: themePalette.BG,
        },
        primary: {
            main:themePalette.LIME
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"0.5em"
                }
            }
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius: "0.8em",
                    fontSize:"1em"
                },
            },
            styleOverrides:{
                standardError:{
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN
                },
                standardSuccess:{
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                    background: themePalette.BG_SUCCES_MAIN
                }
            }
        }   
    },
    
  })

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
    </ThemeProvider>;
};
