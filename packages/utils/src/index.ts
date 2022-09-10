import log from 'npmlog'

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'

log.heading = 'js-cli'
log.addLevel('success', 2000, { fg: 'green', bold: true })
console.log('@zold/utils 载入成功！')
export { log }