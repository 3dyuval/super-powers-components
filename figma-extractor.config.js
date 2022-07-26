require('dotenv').config();

const iconNaming = originalName => {
    const formattedName = originalName.replace(/ /g, '').replace('/', '-');
    return formattedName;
}


module.exports = {
    apiKey: process.env.FIGMA_ACCESS_TOKEN, // your Figma api access key
    fileId: process.env.FIGMA_FILE_ID, // Figma file id
    styles: {
        exportPath: './ui/theme',
        colors: {
            // keyName: nameFromFigma => nameFromFigma`, // custom key name
        },
        effects: {
            // keyName: nameFromFigma => nameFromFigma`, // custom key name
        },
        gradients: {
            // keyName: nameFromFigma => nameFromFigma`, // custom key name
        },
        textStyles: {
            // keyName: nameFromFigma => `.v-${getTextStyleName(nameFromFigma)}`,
        },
    },
    icons: {
        // disabled: true,
        nodeIds: ['0:7882', '0:7883', '0:7884', '0:7885', '0:13046', '0:13105', '0:13548', '0:13549', '0:13550', '0:13551', '0:13552', '0:13553', '0:13555', '0:13559', '0:13562', '0:13563', '0:13564', '0:13565', '0:13566', '0:13568', '0:13573', '0:13578', '0:13583', '0:13588', '0:13591', '0:13594', '0:13596', '0:13621', '0:13632', '0:13643', '0:13647', '0:13651', '0:14090', '0:14092', '0:14182', '0:14184', '0:14204', '0:14241', '0:14243', '0:14261', '0:14299', '0:14715', '0:14720', '0:14732', '0:14734', '0:14745', '0:14756', '0:14766', '0:14767', '0:14768', '0:14968', '0:14972', '0:15179', '0:15197', '0:15228', '0:15235', '0:15433', '0:16088', '0:16099', '0:17546', '0:17551', '0:17864', '0:18340', '0:18348', '0:18356', '0:18368', '0:18373', '0:18436', '0:18474', '0:18721', '0:18735', '0:18739', '0:18743', '0:19058', '0:19693', '0:20190', '0:20283'],
        iconName: name => iconNaming(name), // custom format icon name
        exportPath: './src/assets/icons32',
        generateSprite: false,
        generateTypes: true,
        localIcons: false,
    },
};