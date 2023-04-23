var push = require('web-push')

let vapidKeys = {
    publicKey: 'BB6iMHJgjroOX91pDJ4EAlsYCuiDc2OSVsEoWZiXv77GxAuWRny6ZubRMDgP0jw1k96LgrdHSbDl3kxw2rIjsag',
    privateKey: '1HhlHfhFBaPloDx1mx5NY-J391wIDXkRmEqNCVgY_nI'
}

push.setVapidDetails('mailto: test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/e3s9TMqAjRk:APA91bF0Aq8D184ZxpLPj1GWo0HOsoMDf7MIlOMTe0KBFgDlpqugWvednxN--hb7h-JWJ6hh_J2FjOnepDS5wIsVMc-hoFiGyKPINyPC44TUyPIGCYIo3h_IWEnxp_-f5igntY89EAcC","expirationTime":null,"keys":{"p256dh":"BPWSAdZQ-_E7Qow95uRlXEbHE045PVgUCXC5kVwc8DQsKH4hFKLDXRcX14hWVOTdsjMkWTuZ7zaKMIpLPy8MnYc","auth":"c13GgNx7pi9jh5OvvfJ1zw"}}

push.sendNotification(sub, 'test!!!!!!')