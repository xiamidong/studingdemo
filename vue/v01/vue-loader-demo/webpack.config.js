module.exports={
    entry:'./main.js',

    output:{
        path:__dirname,
        filename:'bundle.js'
    },

    module:{
        loaders:[
            {test:/\.vue$/,loader:"vue"},
            {test:/\.css$/,loader:"style!css"},
            {test:/\.js$/,loader:"babel-loader",exclude:/node_modules/}
        ]
    },
    babel:{
        presets:['es2015'],
        plugins:['transform-runtime']
    }
};