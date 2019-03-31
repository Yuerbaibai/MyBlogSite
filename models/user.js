var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})

var Schema = mongoose.Schema

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: {
        type: Date,
        default: Date.now
    },
    last_modified_time: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: '/public/img/avatar-max-img.png'
    },
    bio: {
        type: String,
        default: ''
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],// -1 表示保密 ； 0 表示男 ； 1 表示女
        default: -1
    },
    birthday: {
        type:Date
    },
    status: {
        type: Number,
        enum: [0, 1, 2],// 0 表示没有权限限制 ；1 表示不能留言 ； 2 表示不能登陆
        default:0
    }
    })
module.exports = mongoose.model('User', userSchema)