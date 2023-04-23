var push = require('web-push')

let vapidKeys = {
    publicKey: 'BOU-dlKoy3-aFElyPR4SLO8d6b4T7JvE9cAdiJJzKOiGysrvx6ddZ5FCwASvgCII1cWR4Aml3AKyRto33GSh16Q',
    privateKey: 'OUHyjmcDqBgsCDtrAeUGqQoAfRnKXCC-ibx6OyFrGBw'
  }

  push.setVapidDetails('mailto: ok@aol.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {}

  push.sendNotification(sub, 'testing message')