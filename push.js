var push = require('web-push')

let vapidKeys = {
    publicKey: 'BB6iMHJgjroOX91pDJ4EAlsYCuiDc2OSVsEoWZiXv77GxAuWRny6ZubRMDgP0jw1k96LgrdHSbDl3kxw2rIjsag',
    privateKey: '1HhlHfhFBaPloDx1mx5NY-J391wIDXkRmEqNCVgY_nI'
}

push.setVapidDetails('mailto: test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test!!!!!!')