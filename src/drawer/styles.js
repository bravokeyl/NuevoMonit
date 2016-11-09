import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "menuTop": {
      "flex": 1,
      "width": width,
      "backgroundColor": "rgba(255,255,255,0.3)"
    },
    "menuTopBg": {
      "flex": 1,
      "width": width,
      "justifyContent": "space-between",
      "paddingLeft": 10,
      "minHeight": 100,
    },
    "avatar": {
      "width": 40,
      "height": 40,
      "resizeMode": "contain",
      "borderRadius": 40,
      "marginTop": 10,
      "marginBottom": 10,
      "alignSelf": "flex-start",
    },
    "profileInfo": {
      "flex": 4,
      "alignSelf": "flex-start",
    },
    "fullname": {
      "marginTop": 8,
      "marginBottom": 6,
      "fontSize": 14,
      "color": "#fafafa",
      "fontWeight": "600",
    },
    "email": {
      "color": "#fafafa",
      "fontSize": 12,
    },
    "menuItems": {
      "flex": 3,
      "width": width,
    },
    "menuRow": {
        "flexDirection": "row",
        "alignItems": "center",
        "justifyContent": "center",
        "position": "relative",
        "paddingTop": 7,
        "paddingBottom": 7,
        "marginBottom": 20,
        "height": 48,
        "borderTopWidth": 1,
        "borderTopColor": "rgba(255,255,255,0.1)"
    },
    "menuLink": {
        "fontSize": 22,
        "color": "#000",
        "fontWeight": "300"
    },

    "profile": {
        "alignItems": "center",
        "width": width/2,
        "marginTop": -(vh * 10),
        "marginBottom": vh * 5
    },
    "menuSignOut": {
        "borderTopWidth": 0,
        "position": "absolute",
        "bottom": vw * 10,
        "width": vw * 80
    },
    "logoutLink": {
        "fontSize": 15,
        "color": "#000"
    },
    "logo": {
        "width": width/2-20,
        "height": vh * 10,
        "resizeMode": "contain",
        "marginTop": -40,
        "marginBottom": 40,
        "marginLeft": 10
    },
    "menuOverlay": {
        "backgroundColor": "rgba(0,0,0,0.7)"
    },

    "menuColorWide": {
        "backgroundColor": "white"
    },
    "sideMenuLeft": {
        "backgroundColor": "#fff",
        "flex": 1,
        "height": height,
        "alignItems": "flex-start",
        "justifyContent": "center"
    },
    "menuRowLeft": {
        "flexDirection": "row",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "position": "relative",
        "marginBottom": 7,
        "marginTop": 7,
        "marginLeft": 16,
        "height": 48
    },
    "menuRowWide": {
        "marginLeft": vw * 10
    },
    "menuLinkLeft": {
        "fontSize": 15,
        "color": "#666",
        "fontWeight": "500",
        "marginTop": 24
    },
    "logoutLinkLeft": {
        "fontSize": 15,
        "color": "#333"
    },
    "icon": {
        "fontSize": 24,
        "color": "#666",
        "marginRight": 20,
        "marginTop": 20
    },
    "iconWide": {
        "marginRight": 40,
        "fontSize": 22,
        "marginTop": 21
    },
    "profileLeft": {
        "alignItems": "center",
        "width": vw * 40,
        "marginTop": -(vh * 30),
        "marginBottom": vh * 5
    },

    "address": {
        "fontSize": 11
    },
    "badge": {
        "position": "absolute",
        "alignItems": "flex-end",
        "width": vw * 10,
        "right": -35,
        "bottom": 5
    },
    "badgeText": {
        "color": "#000",
        "backgroundColor": "transparent",
        "fontSize": 11,
        "fontWeight": "600",
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 5
    },
    "badgeIcon": {
        "width": vw * 5,
        "height": vw * 5,
        "resizeMode": "cover"
    }
});
