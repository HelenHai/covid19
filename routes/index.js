import {get, post, put, del, uploader} from '../utils/axios'
import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/getVariantsData', (req, res) => {
    function filterObj(obj, arr = ["Alpha", "Beta", "Delta", "Epsilon", "Eta", "Gamma", "Iota", "Kappa", "Lambda", "Others"]) {
        if (typeof (obj) !== "object" || !Array.isArray(arr)) {
            throw new Error("参数格式不正确")
        }
        const result = {}
        Object.keys(obj).filter((key) => arr.includes(key)).forEach((key) => {
            result[key] = obj[key]
        })

        const res = []
        Object.keys(result).forEach(item => {
            res.push({
                value: +result[item],
                name: item,
            })
        })

        let ret = {name: obj.Entity, code: obj.Code, date: obj.Day, variants: res}
        return ret
    }

    get('/getVariantsData', {params: {name: req.query.name}}).then((ret) => {
        let {code, msg, data} = ret


        if (code === 0) {
            let r = filterObj(data[0])
            res.json({code: 200, data: r, msg: "success"})
        } else {
            res.json({code: 200, msg})
        }

    })
})

router.get('/getGeo',(req,res,next)=>{
    function format(data) {
        let arr = []
        data.forEach((item)=>{
            arr.push({
                [item.city]:[item['lati'], item['longti']]
            })
        })
        return arr
    }

    get('/getGeo').then((ret)=>{
        let {code, msg, data} = ret
        if(code === 0) {
            let r = format(data)
            res.json({code: 200, data: r, msg: "success"})
        } else {
            res.json({code: 200, msg})
        }

    }).catch((e)=>{
        res.json({
            code: 500,
            msg:'server error'
        })
        console.error(e)
    })

})
module.exports = router;
