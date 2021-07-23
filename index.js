const rpc = require('discord-rpc');

const config = {
	appId: "l'id de ton app discord", 

	details: "En ligne 🟢", 
	largeImageKeyName: "large-image-key", 
	largeImageText: "XXXXXXXX",
	smallImageKeyName: "small-image-key", 
	smallImageText: "XXXXXXXX", 

	buttonOneName: "Invite bot", 
	buttonOneUrl: "https://discord.com/api/oauth2/authorize?client_id=850660876315000852&permissions=8&scope=bot"
};

rpc.register(config.appId);
const client = new rpc.Client({transport: 'ipc'});

client.on('ready', () => {
	console.log('RPC Started');
	client.setActivity({
		details: config.details,
		largeImageKey: config.largeImageKeyName,
		largeImageText: config.largeImageText,
		smallImageKey: config.smallImageKeyName,
		smallImageText: config.smallImageText,
		buttons: [
			{
				label: config.buttonOneName,
				url: config.buttonOneUrl
			},
			{
				label: config.buttonTwoName,
				url: config.buttonTwoUrl
			}
		]
	});
});

const clientId = config.appId
client.login({ clientId });
