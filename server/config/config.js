const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE:process.env.MONGODB_URI,
        PORT: process.env.PORT
    },
    default:{
        SECRET: 'fufuuy85785fsdtfd',
        DATABASE:'mongodb://localhost:27017/tgd_app',
        PORT: 3000
    }
} 

exports.get = function get(env){
    return config[env] || config.default
}