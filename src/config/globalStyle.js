import colors from "./colors";

export default {
  input: {
    container: {
      marginVertical: 7,
    },
    inputCoÍntainer: {
      position: "relative",
      zIndex: 100,
    },
    icon: {
      position: "absolute",
      zIndex: 1000,
      top: "35%",
      left: "4%",
    },

    input: {
      paddingBottom: 20,
      paddingTop: 21,
      paddingRight: 24,
      backgroundColor: colors.lightGray,
      borderRadius: 10,
      fontSize: 16,
      fontFamily: "LatoRegular",
    },
  },
};
