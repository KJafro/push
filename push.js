var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOU-dlKoy3-aFElyPR4SLO8d6b4T7JvE9cAdiJJzKOiGysrvx6ddZ5FCwASvgCII1cWR4Aml3AKyRto33GSh16Q',
    privateKey: 'OUHyjmcDqBgsCDtrAeUGqQoAfRnKXCC-ibx6OyFrGBw'
  }

  push.setVapidDetails('mailto: ok@aol.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dYxndEA-uCw:APA91bFU1dO_cgu7UDOGKLTT_qQr1FOGoN1LMPWBvd4GgixpHU1yZzEwOPTXDuHLmohXUIVnbmS44x3DV-PJhVqFtdecnqT2ieA_wSBh6YM22Gsoh2Bqd5Ym75_zcM-80PAXUBjgpuEM","expirationTime":null,"keys":{"p256dh":"BDycnaJ1fggv8W3Iy9LdZeD5VT2RjzT1m6WnsbLWTu2ASry9LYWCF8h4Wbmm8el4j7S3GGaAh457kgj_vqfpOrs","auth":"z8fPgVgwUOLKKBW1oznpJQ"}}

  push.sendNotification(sub, 'testing message')