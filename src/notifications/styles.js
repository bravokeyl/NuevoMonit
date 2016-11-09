import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#F2F2F2"
    },
    "card": {
        "backgroundColor": "#fff",
        "width": width-20,
        "marginLeft": 12,
        "marginRight": 12,
        "marginTop": 6,
        "marginBottom": 6,
        "paddingTop": 16,
        "paddingRight": 16,
        "paddingBottom": 16,
        "paddingLeft": 16,
        "height": 90,
        "overflow": "hidden",
        "borderRadius": 3
    },
    "blockText": {
        "width": width-70,
        "paddingTop": 6
    },
    "unreadBell": {
        "color": "#2ecc71",
        "fontSize": 30
    },
    "unreadHeader": {
        "color": "#2ecc71"
    },
    "unreadText": {
        "fontSize": 11,
        "color": "#2ecc71"
    },
    "readBell": {
        "color": "#484848",
        "fontSize": 30
    },
    "readHeader": {
        "color": "#484848"
    },
    "readText": {
        "fontSize": 11,
        "color": "#484848"
    }
});
