const contractsModuleContext = require("../common/context")
const GroupRegistration = require("../common/atoms/accessGroupRegistration")

module.exports = async callback => {
	const moduleContext = await contractsModuleContext(web3)
	const groupRegistration = new GroupRegistration(moduleContext)

	const GROUP_NAME = "[group name]"
	const users = [] // TODO: put users' or contracts' addresses here

	await groupRegistration.createGroup(GROUP_NAME, users)

	console.log(`[${__filename}] ${GROUP_NAME} now include ${users} users: #done`)

	callback()
}